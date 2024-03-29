import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
