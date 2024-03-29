import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-white iq-title-box-2 mb-0',
    title: 'Let Us Help You Grow',
    titleIcon: '',
    description: 'Ready to launch your business to the stratosphere'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
