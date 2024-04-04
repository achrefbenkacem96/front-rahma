import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { AppMenuComponent } from './app.menu.component';

@Component({
    selector: 'app-topbar',
    standalone:true,
    imports:[RouterModule, NgClass, AppMenuComponent, RouterModule],
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,  private router: Router) { }
    logout(){
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      this.router.navigate(['/']);

    }
}
