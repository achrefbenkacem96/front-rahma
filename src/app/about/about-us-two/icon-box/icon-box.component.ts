import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-icon-box',
  standalone:true,
  imports:[TitleSectionComponent, NgFor],
  templateUrl: './icon-box.component.html'
})
export class IconBoxComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2 wow fadeInUp',
    title: 'Our key differentiators ',
    subTitle: 'Our key',
    titleIcon: ''
  };
  
  List: any[] = [
    {
      title: "Geographic Footprint",
      description: "It is a long established fact that a reader will be distracted by the of readable content.",
      image: "assets/images/icon-box/01.png",
      href: "javascript:void(0)"
    },
    {
      title: "One Click  Apps",
      description: "It is a long established fact that a reader will be distracted by the of readable content.",
      image: "assets/images/icon-box/02.png",
      href: "javascript:void(0)"
    },
    {
      title: "Full Resource Control",
      description: "It is a long established fact that a reader will be distracted by the of readable content.",
      image: "assets/images/icon-box/03.png",
      href: "javascript:void(0)"
    },
    {
      title: "Upload ISO / Mount ISO",
      description: "It is a long established fact that a reader will be distracted by the of readable content.",
      image: "assets/images/icon-box/04.png",
      href: "javascript:void(0)"
    },
    {
      title: "Linux, Windows and BSD",
      description: "It is a long established fact that a reader will be distracted by the of readable content.",
      image: "assets/images/icon-box/05.png",
      href: "javascript:void(0)"
    },
    {
      title: "No Long Term Contracts",
      description: "It is a long established fact that a reader will be distracted by the of readable content.",
      image: "assets/images/icon-box/06.png",
      href: "javascript:void(0)"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
