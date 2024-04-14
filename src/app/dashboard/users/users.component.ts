import {
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { UserService } from '../../services/service-user.service';
import { User } from '../../models/user';
import { Role } from '../../models/role';

@Component({
  selector: 'app-users',
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
    ConfirmDialogModule,
    TagModule,
    ToastModule,
    DialogModule,
    RatingModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [MessageService, ConfirmationService],
})
export class UsersComponent implements OnInit {
  userDialog: boolean = false;

  users!: User[];
  role: any = localStorage.getItem('role');
  role_?: Role;
  user!: User;
  formDialog!: string;

  selectedUsers!: User[] | null;

  submitted: boolean = false;
  selectedRole?: Role  ;

  statuses!: any[];
  roles: Role[] = [
        { name: 'ROLE_USER', id: 1 },
        { name: 'ROLE_ADMIN', id: 2},
        { name: 'ROLE_RESPONSABLE', id: 3 },

    ];
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.selectedRole = this.roles[1];

  }

  ngOnInit() {
    this.loadUsers();

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' },
    ];
  }
  loadUsers() {
    this.userService.getAll().subscribe({
      next: (res: any) => {
        // Specify the type of 'res' as 'any[]'
        this.users = this.parseResponseToUser(res).flat(); // Parse the response
      },
      error: (err) => {
        console.log(
          '🚀 ~ AppUserComponent ~ this.serviceUser.getAll ~ err:',
          err
        );
      },
    });
  }
  private parseResponseToUser(response: any[]): User[] {
    //@ts-ignore
    return response.map((user) => {
      let rolesString = user.roles.map((role: any) => role.name).join(', ');

      // Check if the current user has the role "ROLE_MANAGER" and if rolesString contains only "ROLE_ADMIN"
      if (this.role === 'ROLE_MANAGER' && rolesString === 'ROLE_ADMIN') {
        // Return an empty array if the conditions are met
        return [];
      }
      user.role = rolesString;
      // Otherwise, return the user object as it is
      return user;
      //@ts-ignore
    });
  }
  openNew() {
    //@ts-ignore
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(
          (val) => !this.selectedUsers?.includes(val)
        );
        this.selectedUsers = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userDialog = true;

    this.formDialog = "update";

  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.username + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.delete(user.id).subscribe({
          next: () => {
            this.loadUsers();
            console.log('User deleted successfully.');
          },
          error: (error) => {
            console.error('Error deleting user:', error);
          },
        });
        //@ts-ignore
        this.user = {};
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
    this.userDialog = false;
    this.submitted = false;
    this.formDialog = "";

  }

  saveUser(value: string) {
    this.user = {};

    this.submitted = false;
     this.userDialog = true;
     this.formDialog = value;
    console.log(this.selectedRole);
    console.log(this.user);

    // // this.user.id = this.createId();
    // // this.user.image = 'product-placeholder.svg';
    // this.user.roles = this.role
    // this.users.push(this.user);
    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Successful',
    //   detail: 'Product Created',
    //   life: 3000,
    // });
    // this.users = [...this.users];
    // this.userDialog = false;
    // //@ts-ignore
    // this.user = {};
    // //@ts-ignore
    // this.roles = {};
  }
  addUser() {
    this.submitted = true;
    console.log(this.selectedRole);
    console.log(this.user);
  //@ts-ignore
    this.user.roles = [this.selectedRole]
    console.log("🚀 ~ UsersComponent ~ addUser ~ this.user:", this.user)
    this.userService.addUser(this.user).subscribe({
      next: (response) => {
        console.log("User added successfully:", response);
        this.loadUsers()
      },
      error: (error) => {
        console.error("Error adding user:", error);
        // Optionally handle error response here
      }
    });
    // // this.user.id = this.createId();
    // // this.user.image = 'product-placeholder.svg';
    // this.user.roles = this.role
    // this.users.push(this.user);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Created',
      life: 3000,
    });
    this.users = [...this.users];
    this.userDialog = false;
    //@ts-ignore
    this.user = {};
    //@ts-ignore
    this.selectedRole = this.roles[1];
    this.formDialog ="";
  }
  updateUser() {
    this.submitted = true;
    // this.user.id = this.createId();
    // this.user.image = 'product-placeholder.svg';
      //@ts-ignore
    this.user.roles = [this.selectedRole]

    this.userService.update(this.user, this.user.id).subscribe({
      next: (response) => {
        console.log('User updated successfully:', response);

        this.loadUsers();
      },
      error: (error) => {
        console.error('Error updating user:', error);
        // You may handle any error message or other actions here
      },
    });
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Created',
      life: 3000,
    });
    this.users = [...this.users];
    this.userDialog = false;
    //@ts-ignore
    this.user = {};
    this.formDialog = "";

  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
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
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
}
