import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { NgFor, NgIf } from '@angular/common';
import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'app-menu',
    standalone:true,
    styleUrl: './app.menu.component.css',

    imports:[NgFor, NgIf, MenuModule, ToastModule, BadgeModule],
    providers: [MessageService],
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  items : any[] = [];
  role: string | null = localStorage.getItem('role');
  constructor(public layoutService: LayoutService) { }

    ngOnInit() {
      switch (this.role) {
        case "ROLE_ADMIN":
          this.items  = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink:  '/dashboard'  }
                ]
            },



            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        routerLink:  'users'
                    },
                    {
                        label: 'Demande',
                        icon: 'pi pi-fw pi-send',
                        routerLink:  'request'
                    },
                    {
                        label: 'Reclamations',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink:  'complaints'
                    },
                    {
                        label: 'Cloud Services',
                        icon: 'pi pi-fw pi-server',
                        routerLink:  'cloud-services'
                    },
                    {
                        label: 'Virtual Machines',
                        icon: 'pi pi-fw pi-database',
                        routerLink:  'virtual-machines'
                    },
                    {
                        label: 'Messaging',
                        icon: 'pi pi-fw pi-align-justify',
                        routerLink:  'messaging'
                    },
                    {
                        label: 'Service Hosting Monitoring',
                        icon: 'pi pi-fw pi-sitemap',
                        routerLink:  'service-hosting-monitoring'
                    },

                ]
            },


        ];
          break;
        case "ROLE_RESPONSABLE":
          this.items  = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink:  '/dashboard'  }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Demande',
                        icon: 'pi pi-fw pi-send',
                        routerLink:  'request'
                    },
                    {
                        label: 'Reclamations',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink:  'complaints'
                    },
                    {
                      label: 'Cloud Services',
                      icon: 'pi pi-fw pi-server',
                      routerLink:  'cloud-services'
                  },
                  {
                      label: 'Virtual Machines',
                      icon: 'pi pi-fw pi-database',
                      routerLink:  'virtual-machines'
                  },
                    {
                        label: 'Messaging',
                        icon: 'pi pi-fw pi-align-justify',
                        routerLink:  'messaging'
                    },
                    {
                        label: 'Service Hosting Monitoring',
                        icon: 'pi pi-fw pi-sitemap',
                        routerLink:  'service-hosting-monitoring'
                    },
                    {
                        label: 'Invoices ',
                        icon: 'pi pi-fw pi-user',
                        routerLink:  'invoices'
                    },

                ]
            },


        ];
          break;
        case "ROLE_USER":
          this.items  = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink:  '/dashboard'  }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Demande',
                        icon: 'pi pi-fw pi-send',
                        routerLink:  'request'
                    },
                    {
                        label: 'Reclamations',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink:  'complaints'
                    },

                    {
                        label: 'Messaging',
                        icon: 'pi pi-fw pi-align-justify',
                        routerLink:  'messaging'
                    },
                    {
                        label: 'Service Hosting Monitoring',
                        icon: 'pi pi-fw pi-sitemap',
                        routerLink:  'service-hosting-monitoring'
                    },
                    {
                        label: 'Invoices ',
                        icon: 'pi pi-fw pi-user',
                        routerLink:  'invoices'
                    },

                ]
            },


        ];
          break;

      }

    }
}
