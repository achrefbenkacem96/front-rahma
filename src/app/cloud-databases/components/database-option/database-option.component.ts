import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database-option',
  templateUrl: './database-option.component.html'
})
export class DatabaseOptionComponent implements OnInit {

  
titleSectionProp: any = {
  class: 'text-center iq-title-box-2',
  title: 'Cloud Database Options',
  subTitle: 'Options',
  titleIcon: ''
};

  constructor() { }

  ngOnInit(): void {
  }

}
