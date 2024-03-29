import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider6Component } from './revolution-slider6.component';



@NgModule({
  declarations: [RevolutionSlider6Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider6Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider6Module { }
