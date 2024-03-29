import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone:true,
  imports:[TitleSectionComponent, NgFor],
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2 wow fadeInUp',
    title: 'Insights & resources',
    subTitle: 'About Us',
    titleIcon: ''
  };

  List1: any[] = [
    { title: 'FAQ' ,image: 'assets/images/icon-box/07.png', link: '#'},
    { title: 'Server Status' ,image: 'assets/images/icon-box/08.png', link: '#'}
  ];
  List2: any[] = [
    { title: 'Documentation' ,image: 'assets/images/icon-box/09.png', link: '#'},
    { title: 'APIs' ,image: 'assets/images/icon-box/07.png', link: '#'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
