import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { UserService } from '../../services/service-user.service';
import { NgIf } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, NgIf, ToastModule, MessagesModule, MessageModule, DropdownModule, ButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [MessageService]

})
export class ProfileComponent implements OnInit{
  user_name?: string | null = localStorage.getItem('username')
  user: any;
  constructor(private messageService: MessageService, private userService: UserService) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    numtel: new FormControl('',),
    refnv: new FormControl('',),

  });

  get f() {
    return this.form.controls;
  }
  ngOnInit(): void {
       this.getUser()

   }

   getUser() {
    this.userService.getByUsername(this.user_name).subscribe({
      next: (res: any) => { // Specify the type of 'res' as 'any[]'
         this.user = res
         console.log("🚀 ~ ProfileComponent ~ this.userService.getByUsername ~ this.user:", this.user)
      },
      error: (err) => {
        console.log("🚀 ~ AppUserComponent ~ this.serviceUser.getAll ~ err:", err);
      }
    });
  }
  submit(){
    this.form.valid
    console.log("🚀 ~ ProfileComponent ~ submit ~ this.form.valid:", this.form.value)
    console.log("🚀 ~ ProfileComponent ~ submit ~ this.form.valid:", this.form.valid)

    if (this.form.valid) {
      //@ts-ignore
      localStorage.setItem('username', this.form.value.username)
      this.userService.update( this.form.value, this.user.id ).subscribe({
        next: (res: any) => { // Specify the type of 'res' as 'any[]'
           this.user = res
           console.log("🚀 ~ ProfileComponent ~ this.userService.getByUsername ~ this.user:", this.user)
           this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Profile Updated', life: 750 });
          },
        error: (err) => {
          console.log("🚀 ~ AppUserComponent ~ this.serviceUser.getAll ~ err:", err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message, life: 750 });

        }
      });
    }
  }

}
