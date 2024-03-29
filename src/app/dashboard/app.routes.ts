import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
 
export const routes: Routes = [{
    path: '',
    children: [
      {
        path: '',
        component:  DashboardComponent,
      },
      {
        path: 'users',
        component:  UsersComponent,
      },
    
    ],
}
      
 ];
