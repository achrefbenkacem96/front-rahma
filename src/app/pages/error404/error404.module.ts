import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { Error404Component } from './error404.component';

const routes: Routes = [
  {
    path: '',
    component: Error404Component,
  }
];

@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class Error404Module { }
