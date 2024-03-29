       // @ts-nocheck 
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,  
  imports: [NgIf, NgFor, CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() logoId: boolean;
  @Input() logoImg: string;
  @Input() classHeader: string;
  @Input() navItemList: any[];
  @Input() contactInfo: any;
  currentPath!:string; 
  constructor(private router: Router) { }


  ngOnInit() {
    this.currentPath = this.router.url;
   }

}
