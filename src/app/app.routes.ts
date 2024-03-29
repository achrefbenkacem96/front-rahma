import { Routes } from '@angular/router';
import { IndexComponent } from './landing-page1/index/index.component';
import { AboutUsTwoComponent } from './about/about-us-two/about-us-two.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingPlanComponent } from './pages/pricing-plan/pricing-plan.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactUs2Component } from './contact-us/contact-us2.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
export const routes: Routes = [
     {path:'', component: IndexComponent},
     {path:'about-us', component: AboutUsTwoComponent},
     {path:'pages/services', component: ServicesComponent},
     {path:'pages/pricing-plan', component: PricingPlanComponent},
     {path:'pages/faq', component: FaqComponent},
     {path:'login', component: LoginComponent},
     {path:'sign-up', component: SignUpComponent},
     { path: 'dashboard', loadChildren: ()=> import('./dashboard/app.routes').then(m => m.routes) },
      {path:'contact-us', component: ContactUs2Component} 
 ];
