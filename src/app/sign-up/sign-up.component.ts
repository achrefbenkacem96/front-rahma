import { Component } from '@angular/core';
import { TopBannerComponent } from '../qloud/components/top-banner/top-banner.component';
import { HeaderComponent } from '../qloud/components/header/header.component';
import { FooterComponent } from '../qloud/components/footer/footer.component';
import { topMenuBarItems } from '../../constants/menu';
import { PluginsService } from '../qloud/plugins.service';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [TopBannerComponent,  MaterialModule,NgIf, HeaderComponent, FooterComponent, RouterModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title:"Services"
  };

  constructor(private plugins: PluginsService, private router: Router, private authentication: AuthenticationService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    numtel: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, { validators: this.passwordMatchingValidator });


  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      alert("Please fix the errors in the form.");
      return;
    }
    if (this.form.hasError('passwordsNotMatching')) {
      alert("Passwords do not match.");
      return;
    }
    // Proceed with form submission logic here
    this.authentication.register(this.form.value).subscribe({
      next:(res) => {
        //@ts-ignore
        if (res.message === "Utilisateur enregistré avec succès !") {
          this.router.navigate(['/verify']);
        } else {
          alert("Please fix the errors in the form.");
        }
        console.log("🚀 ~ AppSideRegisterComponent ~ this.authentication.register ~ res:", res)
        return {
      }
      },
      error:(err) => {
        console.log("🚀 ~ AppSideRegisterComponent ~ this.authentication.register ~ err:", err)
        return {
      }
      }
    })
    // this.router.navigate(['/login']);
  }
  private passwordMatchingValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsNotMatching: true };
  }
}


