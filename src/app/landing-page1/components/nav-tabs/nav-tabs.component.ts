import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  standalone: true,
  imports:[TitleSectionComponent, NgFor],
  styleUrls: []
})
export class NavTabsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Powerful Control Panel & APIs',
    subTitle: 'Our Services'
  };
  navList: any[] = [
    {
      id: 'tab-one-click-deploy',
      title: 'One Click Deploy',
      sub_title:"It is a long established fact that a reader will be distracted.",
      image:"assets/images/tab/02-2.png",
      content_image:"assets/images/tab/01.png",
      active: true
    },
    {
      id: 'tab-powerful-api',
      title: 'Powerful API',
      sub_title:"It is a long established fact that a reader will be distracted.",
      image:"assets/images/tab/02-2.png",
      content_image:"assets/images/tab/02.png"
    },
    {
      id: 'tab-easy-management',
      title: 'Easy Management',
      sub_title:"It is a long established fact that a reader will be distracted.",
      image:"assets/images/tab/03-3.png",
      content_image:"assets/images/tab/03.png"
    },
    {
      id: 'tab-help-desk-services',
      title: 'Help Desk Services',
      sub_title:"It is a long established fact that a reader will be distracted.",
      image:"assets/images/tab/04-4.png",
      content_image: "assets/images/tab/04.png"

    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
