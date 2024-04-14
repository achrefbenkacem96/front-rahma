import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../models/Reclamation';
import { UserService } from '../../services/service-user.service';
import { User } from '../../models/user';
import { Etat } from '../../models/Etat';

@Component({
  selector: 'app-complaints',
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
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent {
  reclamationDialog: boolean = false;
  Etats = [
    { etat: 'EN_ATTENTE' },
    { etat: 'ACCEPTE' },
    { etat: 'REFUSE' }
  ];
  reclamations!: Reclamation[];
  role: any = localStorage.getItem('role');
  username: any = localStorage.getItem('username');
  reclamation!: Reclamation;
  formDialog!: string;
  user!: User;

  selectedReclamations!: Reclamation[] | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(
    private reclamationService: ReclamationService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {
    this.userService.getByUsername(this.username).subscribe({
      next: (user: User) => {
        console.log("🚀 ~ ComplaintsComponent ~ this.userService.getByUsername ~ user:", user)
        this.user = user
        this.loadReclamations();
      },
      error: (error) => {
        console.error("Error adding Reclamation:", error);
        // Optionally handle error response here
      }
    });

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' },
    ];
  }
  loadReclamations() {
    if (this.role === "ROLE_ADMIN") {

      this.reclamationService.getAll().subscribe({
        next: (res: any) => {
          console.log("🚀 ~ ComplaintsComponent ~ this.reclamationService.getByUserId ~ res:", res)
          // Specify the type of 'res' as 'any[]'
          this.reclamations = res; // Parse the response
        },
        error: (err) => {
          console.log("🚀 ~ RequestComponent ~ this.reclamationService.getAll ~ err:", err)

        },
      });
    } else  {

      this.reclamationService.getByUserId(this.user.id).subscribe({
        next: (res: any) => {
          console.log("🚀 ~ ComplaintsComponent ~ this.reclamationService.getByUserId ~ res:", res)
          // Specify the type of 'res' as 'any[]'
          this.reclamations = res; // Parse the response
        },
        error: (err) => {
          console.log("🚀 ~ RequestComponent ~ this.reclamationService.getAll ~ err:", err)

        },
      });
    }
  }

  openNew() {
    //@ts-ignore
    this.reclamation = {};
    this.submitted = false;
    this.reclamationDialog = true;
  }

  deleteSelectedReclamations() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected reclamations?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedReclamations?.map((item) => {
          //@ts-ignore
          this.reclamationService.delete(item.id).subscribe({
            next: () => {
              console.log('Reclamation deleted successfully.');
              this.loadReclamations();
            },
            error: (error) => {
              console.error('Error deleting Reclamation:', error);
            },
          });
        })
        this.selectedReclamations = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Reclamations Deleted',
          life: 3000,
        });
      },
    });
  }

  editReclamation(reclamation: Reclamation) {
    this.reclamation = { ...reclamation };
    this.reclamationDialog = true;

    this.formDialog = "update";

  }

  deleteReclamation(reclamation: Reclamation) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + reclamation.description + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //@ts-ignore
        this.reclamationService.delete(reclamation.id).subscribe({
          next: () => {
            this.loadReclamations();
            console.log('Reclamation deleted successfully.');
          },
          error: (error) => {
            console.error('Error deleting Reclamation:', error);
          },
        });
        //@ts-ignore
        this.reclamation = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Reclamation Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.reclamationDialog = false;
    this.submitted = false;
    this.formDialog = "";

  }

  saveReclamation(value: string) {
    this.reclamation = {};

    this.submitted = false;
    this.reclamationDialog = true;
    this.formDialog = value;
    console.log(this.reclamation);

  }
  addReclamation() {
    this.submitted = true;
    console.log(this.reclamation);
    this.reclamation.etat = Etat.EN_ATTENTE
    this.reclamation.user = this.user
    //@ts-ignore
    this.reclamationService.add(this.user.id, this.reclamation).subscribe({
      next: (response) => {
        console.log("Reclamation added successfully:", response);
        this.loadReclamations()
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Reclamation Created',
          life: 3000,
        });
      },
      error: (error) => {
        console.error("Error adding Reclamation:", error);
        // Optionally handle error response here
      }
    });


    if (this.reclamations?.length > 0) {

      this.reclamations = [...this.reclamations];
    }
    this.reclamationDialog = false;
    //@ts-ignore
    this.reclamation = {};
    //@ts-ignore
    this.formDialog = "";
  }
  updateReclamation() {
    this.submitted = true;
    if (this.role === "ROLE_ADMIN") {
      //@ts-ignore
      this.reclamation.etat = this.reclamation.etat.etat

      //@ts-ignore
      this.reclamationService.updateEtat(this.reclamation.id, this.reclamation.etat).subscribe({
        next: (response) => {
          console.log('reclamation updated successfully:', response);
          this.loadReclamations();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Reclamation Update',
            life: 3000,
          });
        },
        error: (error) => {
          console.error('Error updating Reclamation:', error);
          // You may handle any error message or other actions here
        },
      });
    } else {
      //@ts-ignore
      this.reclamationService.update(this.reclamation.id, this.reclamation).subscribe({
        next: (response) => {
          console.log('reclamation updated successfully:', response);
          this.loadReclamations();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Reclamation Update',
            life: 3000,
          });
        },
        error: (error) => {
          console.error('Error updating Reclamation:', error);
          // You may handle any error message or other actions here
        },
      });

    }

    this.reclamations = [...this.reclamations];
    this.reclamationDialog = false;
    //@ts-ignore
    this.reclamation = {};
    this.formDialog = "";

  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.reclamations.length; i++) {
      if (this.reclamations[i].id === id) {
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
