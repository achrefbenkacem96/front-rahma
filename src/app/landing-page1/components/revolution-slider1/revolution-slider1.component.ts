import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revolution-slider1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './revolution-slider1.component.html',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class RevolutionSlider1Component implements OnInit {
  public imgSrc = './assets/revslider/assets';
  constructor() { }

  ngOnInit() {
  }

}
