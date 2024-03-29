import { Component, NgZone } from '@angular/core';
import { PluginsService } from '../qloud/plugins.service';
import { topMenuBarItems } from '../../constants/menu';
import { TopBannerComponent } from '../qloud/components/top-banner/top-banner.component';
import { HeaderComponent } from '../qloud/components/header/header.component';
import { FooterComponent } from '../qloud/components/footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NgIf } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TopBannerComponent,  MaterialModule,NgIf, HeaderComponent, FooterComponent, RouterModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  error:string|null="";

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title:"Services"
  };
  
  constructor(private plugins: PluginsService,  private _ngZone: NgZone, private router: Router, private authentication: AuthenticationService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
  submit() {
    // console.log(this.form.value);
    this.authentication.login(this.form.value).subscribe({
      next:(res) => {
        console.log("🚀 ~ next ~ res:", res)
        //@ts-ignore
        localStorage.setItem('accessToken',res.accessToken)
        //@ts-ignore
        localStorage.setItem('role',res.roles[0])
         //@ts-ignore
        localStorage.setItem('username',res.username)
        window.location.href = '/dashboard/users' ;
        return {
        }
      },
      error:(err) => {
            console.log("🚀 ~ error ~ err:", err)
            this.error ="email or password incorrect"
        return {
        }
      },

    })
  }

}
