import { Component } from '@angular/core';
import { Demande } from '../../models/Demande';
import { Role } from '../../models/role';
import { DemandeService } from '../../services/demande.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { UserService } from '../../services/service-user.service';
import { User } from '../../models/user';
import { Etat } from '../../models/Etat';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [
    CommonModule,
    InputNumberModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    FileUploadModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    TagModule,
    ToastModule,
    DialogModule,
    RatingModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
  demandeDialog: boolean = false;
  Etats = [
    { etat: 'EN_ATTENTE' },
    { etat: 'ACCEPTE' },
    { etat: 'REFUSE' }
  ];
  demandes!: Demande[];
  role: any = localStorage.getItem('role');
  demande!: Demande;
  formDialog!: string;

  selectedDemandes!: Demande[] | null;

  submitted: boolean = false;
  username: any = localStorage.getItem('username');

  statuses!: any[];
  user!: User;
  constructor(
    private demandeService: DemandeService,
    private messageService: MessageService,
    private userService: UserService,

    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {
    this.userService.getByUsername(this.username).subscribe({
      next: (user: User) => {
        console.log("🚀 ~ ComplaintsComponent ~ this.userService.getByUsername ~ user:", user)
        this.user = user
        this.loadDemandes();
      },
      error: (error) => {
        console.error("Error adding demande:", error);
        // Optionally handle error response here
      }
    });


    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' },
    ];
  }
  loadDemandes() {
    if (this.role === "ROLE_ADMIN") {

      this.demandeService.getAll().subscribe({
        next: (res: any) => {
          // Specify the type of 'res' as 'any[]'
          this.demandes = res; // Parse the response
        },
        error: (err) => {
          console.log("🚀 ~ RequestComponent ~ this.demandeService.getAll ~ err:", err)

        },
      });
    } else {
      this.demandeService.getByUserId(this.user.id).subscribe({
        next: (res: any) => {
          // Specify the type of 'res' as 'any[]'
          this.demandes = res; // Parse the response
        },
        error: (err) => {
          console.log("🚀 ~ RequestComponent ~ this.demandeService.getAll ~ err:", err)

        },
      });

    }
  }

  openNew() {
    //@ts-ignore
    this.demande = {};
    this.submitted = false;
    this.demandeDialog = true;
  }

  deleteSelectedDemandes() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected demandes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.demandes = this.demandes.filter(
          (val) => !this.selectedDemandes?.includes(val)
        );
        this.selectedDemandes = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Demandes Deleted',
          life: 3000,
        });
      },
    });
  }

  editDemande(demande: Demande) {
    this.demande = { ...demande };
    this.demandeDialog = true;

    this.formDialog = "update";

  }

  deleteDemande(demande: Demande) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + demande.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //@ts-ignore
        this.demandeService.delete(demande.id).subscribe({
          next: () => {
            this.loadDemandes();
            console.log('Demande deleted successfully.');
          },
          error: (error) => {
            console.error('Error deleting Demande:', error);
          },
        });
        //@ts-ignore
        this.demande = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.demandeDialog = false;
    this.submitted = false;
    this.formDialog = "";

  }

  saveDemande(value: string) {
    this.demande = {};

    this.submitted = false;
    this.demandeDialog = true;
    this.formDialog = value;
    console.log(this.demande);

  }
  addDemande() {
    this.submitted = true;
    this.demande.user = this.user
    this.demande.etat = Etat.EN_ATTENTE
    //@ts-ignore
    this.demandeService.add(this.user.id, this.demande).subscribe({
      next: (response) => {
        console.log("Demande added successfully:", response);
        this.loadDemandes()
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Demande Created',
          life: 3000,
        });
      },
      error: (error) => {
        console.error("Error adding Demande:", error);
        // Optionally handle error response here
      }
    });


    if (this.demandes?.length > 0) {

      this.demandes = [...this.demandes];
    }
    this.demandeDialog = false;
    //@ts-ignore
    this.demande = {};
    //@ts-ignore
    this.formDialog = "";
  }
  updateDemande() {
    this.submitted = true;
    if (this.role === "ROLE_ADMIN") {
      //@ts-ignore
      this.demande.etat = this.demande.etat.etat

      //@ts-ignore
      this.demandeService.updateEtat(this.demande.id, this.demande.etat).subscribe({
        next: (response) => {
          console.log('Demande updated successfully:', response);
          this.loadDemandes();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Demande Update',
            life: 3000,
          });
        },
        error: (error) => {
          console.error('Error updating demande:', error);
          // You may handle any error message or other actions here
        },
      });
    } else {
      //@ts-ignore
      this.demandeService.update(this.demande.id, this.demande).subscribe({
        next: (response) => {
          console.log('demande updated successfully:', response);
          this.loadDemandes();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'demande Update',
            life: 3000,
          });
        },
        error: (error) => {
          console.error('Error updating demande:', error);
          // You may handle any error message or other actions here
        },
      });

    }

    this.demandes = [...this.demandes];
    this.demandeDialog = false;
    //@ts-ignore
    this.demande = {};
    this.formDialog = "";

  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.demandes.length; i++) {
      if (this.demandes[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  //@ts-ignore
  getSeverity(status: any) {
    switch (status) {
      case 'ACCEPTE':
        return 'success';
      case 'EN_ATTENTE':
        return 'warning';
      case 'REFUSE':
        return 'danger';
    }
  }
}
