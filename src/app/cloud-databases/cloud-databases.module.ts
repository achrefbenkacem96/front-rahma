import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { IndexComponent } from './index/index.component';
import { RevolutionSlider6Module } from './components/revolution-slider6/revolution-slider6.module';
import { DatabasesComponent } from './components/databases/databases.component';
import { HelpComponent } from './components/help/help.component';
import { ProductsComponent } from './components/products/products.component';
import { DatabaseOptionComponent } from './components/database-option/database-option.component';
import { BusinessComponent } from './components/business/business.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, DatabasesComponent, HelpComponent, ProductsComponent, DatabaseOptionComponent, BusinessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider6Module
  ]
})
export class CloudDatabasesModule { }
