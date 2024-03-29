import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone:true,
  imports:[TitleSectionComponent, NgFor],
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2 wow fadeInUp',
    title: 'How It\'s Work',
    subTitle: 'Process',
    titleIcon: ''
  };

  List: any[] = [
    { title: 'Cloud Compute', image: './assets/images/fancy-box/01.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content deploy at scale on the.'},
    { title: 'Block Storage', image: './assets/images/fancy-box/02.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content deploy at scale on the.'},
    { title: 'Dedicated Cloud', image: './assets/images/fancy-box/03.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content deploy at scale on the.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
