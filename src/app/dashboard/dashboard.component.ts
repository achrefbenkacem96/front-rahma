import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, MainContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
