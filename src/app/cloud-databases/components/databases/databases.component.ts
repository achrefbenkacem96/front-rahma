import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html'
})
export class DatabasesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Cloud Databases',
    subTitle: 'Databases',
    titleIcon: '',
  };

  List: any[] =[
    { title: 'Flexible performance and scale', image: './assets/images/icon-box/01.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content.'},
    { title: 'Broad open-source compatibility', image: './assets/images/icon-box/02.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content.'},
    { title: 'Do more with your data with Analytics', image: './assets/images/icon-box/03.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
