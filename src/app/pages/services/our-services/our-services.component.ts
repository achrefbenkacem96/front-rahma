import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [NgFor, TitleSectionComponent],

  templateUrl: './our-services.component.html'
})
export class OurServicesComponent implements OnInit {


  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'A powerful and innovative feature set',
    subTitle: 'Our services',
    titleIcon: ''
  };

  List: any[] = [
    { 
      title: 'Add-ons' , 
      image : './assets/images/fancy-list/01.png',
      services: [ { title : 'Advance Advisory Team' },{ title :'Professional Services' } ],
      desc: ' It is a long established fact that a reader will be distracted by the.'
    },
    { 
      title: 'Add-ons' , 
      image : 'assets/images/fancy-list/02.png',
      services: [ { title : 'Advance Advisory Team' },{ title :'Professional Services' } ],
      desc: ' It is a long established fact that a reader will be distracted by the.'
    },
    { 
      title: 'Static Sites' , 
      image : 'assets/images/fancy-list/03.png',
      services: [ { title : 'Advance Advisory Team' },{ title :'Professional Services' } ],
      desc: ' It is a long established fact that a reader will be distracted by the.'
    },
    { 
      title: 'Data Clips ' , 
      image : 'assets/images/fancy-list/04.png',
      services: [ { title : 'Advance Advisory Team' },{ title :'Professional Services' } ],
      desc: ' It is a long established fact that a reader will be distracted by the.'
    },
    { 
      title: 'Data Rollback' , 
      image : 'assets/images/fancy-list/05.png',
      services: [ { title : 'Advance Advisory Team' },{ title :'Professional Services' } ],
      desc: ' It is a long established fact that a reader will be distracted by the.'
    },
    { 
      title: 'App Metrics' , 
      image : 'assets/images/fancy-list/06.png',
      services: [ { title : 'Advance Advisory Team' },{ title :'Professional Services' } ],
      desc: ' It is a long established fact that a reader will be distracted by the.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
