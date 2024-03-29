import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html'
})
export class BusinessComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: ' Used by forward-thinking businesses',
    subTitle: 'Businesses',
    titleIcon: ''
  };

  Image1: any[] = [
    { image: './assets/images/client/c-a1.png'},
    { image: './assets/images/client/c-a3.png'},
    { image: './assets/images/client/c-a5.png'},
  ];

  Image2: any[] = [
    { image: './assets/images/client/c-a2.png'},
    { image: './assets/images/client/c-a4.png'},
    { image: './assets/images/client/c-a6.png'},
  ];

  List: any[] = [
    { name: 'JD Scot', image: './assets/images/testimonial/01.png' , design: 'Designer, Qloud' , desc: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
    { name: 'Fitt Morgan', image: './assets/images/testimonial/02.png' , design: 'Designer, Qloud' , desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown.' },
    { name: 'Nik Jorden', image: './assets/images/testimonial/03.png' , design: 'Designer, Qloud' , desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .' },
    { name: 'Julia Cooper', image: './assets/images/testimonial/04.png' , design: 'Designer, Qloud' , desc: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.' },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
