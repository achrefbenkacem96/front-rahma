import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MaterialModule } from '../../../material.module';
import { IconsModule } from '../icon.module';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IconsModule , SidebarComponent, MaterialModule],
})
export class AppAddUserComponent {
  constructor() { }
}
