import { AfterViewInit, Component, Inject, Optional, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ServiceUserService } from '../../services/service-user.service';
import { MaterialModule } from '../../material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppAddUserComponent } from './add/add.component';
import { CommonModule, DatePipe } from '@angular/common';
 import { FormsModule } from '@angular/forms';
import { IconsModule } from './icon.module';
export interface User {
  userId: number;
  username: string;
   email: string;
  numtel: string;
  status: string;
  roles: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule,  IconsModule, SidebarComponent, MaterialModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements AfterViewInit  {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);

  users: User[] = [];

  displayedColumns: string[] = ['#','username', 'email', 'numtel', 'roles', 'status','action'];
  dataSource = new MatTableDataSource(this.users);

  //@ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  constructor( public dialog: MatDialog, public serviceUser: ServiceUserService) { }

  ngAfterViewInit () {
    console.log('test');
    
    this.loadUsers()
    this.dataSource.paginator = this.paginator;
  }

  
  loadUsers() {
    this.serviceUser.getAll().subscribe({
      next: (res: any) => { // Specify the type of 'res' as 'any[]'
        console.log("🚀 ~ AppUserComponent ~ this.serviceUser.getAll ~ res:", res);
        this.users = this.parseResponseToUser(res); // Parse the response
        this.dataSource.data = this.users; // Update the dataSource with the new data
      },
      error: (err) => {
        console.log("🚀 ~ AppUserComponent ~ this.serviceUser.getAll ~ err:", err);
      }
    });
  }
  private parseResponseToUser(response: any[]): User[] {
    return response.map(user => {
      let rolesString = user.roles.map((role: any) => role.name).join(', ');
      return {
        userId: user.id,
        username: user.username,
        email: user.email,
        roles: rolesString,
        numtel: user.numtel,
        status: user.status,
        
       };
    });
  }
 
applyFilter(filterValue: string): void {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

openDialog(action: string, obj: any): void {
  obj.action = action;
  const dialogRef = this.dialog.open(AppUserDialogContentComponent, {
    data: obj,
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result.event === 'Add') {
      this.addRowData(result.data);
    } else if (result.event === 'Update') {
      this.updateRowData(result.data);
    } else if (result.event === 'Delete') {
      this.deleteRowData(result.data);
    }
  });
}

// tslint:disable-next-line - Disables all
addRowData(row_obj: UserAddRequest): void {
  console.log("🚀 ~ AppUserComponent ~ addRowData ~ row_obj:", row_obj)
  const userAddRequest: UserAddRequest = {
      username: row_obj.username,
      email: row_obj.email,
      numtel: row_obj.numtel,
      code: row_obj.code,
      refnv: row_obj.refnv,
      grade: row_obj.grade,
      status: row_obj.status,
   
  };

  // Call your addUser service passing the transformed userAddRequest
  this.serviceUser.addUser(userAddRequest).subscribe({
    next: (response) => {
      console.log("User added successfully:", response);
      this.loadUsers()
    },
    error: (error) => {
      console.error("Error adding user:", error);
      // Optionally handle error response here
    }
  });

  // Open your dialog and render rows as needed
  this.dialog.open(AppAddUserComponent);
  this.table.renderRows();
}

// tslint:disable-next-line - Disables all
updateRowData(row_obj: UserAddRequest): void {
  const userAddRequest: UserAddRequest = {
    username: row_obj.username,
    email: row_obj.email,
    numtel: row_obj.numtel,
    code: row_obj.code,
    refnv: row_obj.refnv,
    grade: row_obj.grade,
    status: row_obj.status,
  };
  //@ts-ignore
  this.serviceUser.update(userAddRequest, row_obj.userId).subscribe({
    next: (response) => {
      console.log('User updated successfully:', response);

      this.loadUsers()
    },
    error: (error) => {
      console.error('Error updating user:', error);
      // You may handle any error message or other actions here
    }
  });
}

// tslint:disable-next-line - Disables all
deleteRowData(row_obj: User): void {
  this.serviceUser.delete(row_obj.userId).subscribe({
    next: () => {
      this.loadUsers()
      console.log('User deleted successfully.');
    },
    error: (error) => {
      console.error('Error deleting user:', error);
    }
  });
}
}

@Component({
// tslint:disable-next-line: component-selector
selector: 'app-dialog-content',
templateUrl: 'user-dialog-content.html',
standalone: true,
imports: [CommonModule, FormsModule, IconsModule , SidebarComponent, MaterialModule],
})
// tslint:disable-next-line: component-class-suffix
export class AppUserDialogContentComponent {
role: string |null = localStorage.getItem('role');
action: string;
// tslint:disable-next-line - Disables all
local_data: any;
selectedImage: any = '';
joiningDate: any = '';

constructor(
  public datePipe: DatePipe,
  public dialogRef: MatDialogRef<AppUserDialogContentComponent>,
  // @Optional() is used to prevent error if no data is passed
  @Optional() @Inject(MAT_DIALOG_DATA) public data: User,
) {
  this.local_data = { ...data };
  this.action = this.local_data.action;
  if (this.local_data.DateOfJoining !== undefined) {
    this.joiningDate = this.datePipe.transform(
      new Date(this.local_data.DateOfJoining),
      'yyyy-MM-dd',
    );
  }
  if (this.local_data.imagePath === undefined) {
    this.local_data.imagePath = 'assets/images/profile/user-1.jpg';
  }
}

doAction(): void {
  this.dialogRef.close({ event: this.action, data: this.local_data });
}
closeDialog(): void {
  this.dialogRef.close({ event: 'Cancel' });
}

selectFile(event: any): void {
  if (!event.target.files[0] || event.target.files[0].length === 0) {
    // this.msg = 'You must select an image';
    return;
  }
  const mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    // this.msg = "Only images are supported";
    return;
  }
  // tslint:disable-next-line - Disables all
  const reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  // tslint:disable-next-line - Disables all
  reader.onload = (_event) => {
    // tslint:disable-next-line - Disables all
    this.local_data.imagePath = reader.result;
  };
}
}

interface UserAddRequest {
  userId?: number ;
  username?: string;
  email?: string;
  numtel?: string;
  code?: string;
  refnv?: string;
  grade?: string;
  status?: string;
}