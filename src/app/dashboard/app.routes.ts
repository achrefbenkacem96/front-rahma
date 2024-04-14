import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ServiceHostingMonitoringComponent } from './service-hosting-monitoring/service-hosting-monitoring.component';
import { RequestComponent } from './request/request.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { VirtualMachinesComponent } from './virtual-machines/virtual-machines.component';
import { MessagingComponent } from './messaging/messaging.component';
 import { authGuard } from '../services/auth.guard';

export const routes: Routes = [

{
  path: '',
  component: DashboardComponent,
  // canActivate: [authGuard ],
  // canActivateChild: [authGuard],
  children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: MainContentComponent },
    {
      path: 'users',
      component:  UsersComponent,
    },
    {
      path: 'profile',
      component:  ProfileComponent,
    },
    {
      path: 'invoices',
      component:  InvoicesComponent,
    },
    {
      path: 'profile',
      component:  ProfileComponent,
    },
    {
      path: 'service-hosting-monitoring',
      component:   ServiceHostingMonitoringComponent,
    },
    {
      path: 'request',
      component:  RequestComponent,
    },
    {
      path: 'complaints',
      component:  ComplaintsComponent,
    },
    {
      path: 'virtual-machines',
      component:  VirtualMachinesComponent,
    },
    {
      path: 'messaging',
      component:  MessagingComponent,
    },

  ],
},

 ];
