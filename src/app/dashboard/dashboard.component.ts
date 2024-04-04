import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
 import { MainContentComponent } from './main-content/main-content.component';
import {  RouterOutlet } from '@angular/router';

import { NgClass } from '@angular/common';
import { AppLayoutComponent } from './layout/app.layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MainContentComponent, AppLayoutComponent, RouterOutlet, NgClass ],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent   {

}
