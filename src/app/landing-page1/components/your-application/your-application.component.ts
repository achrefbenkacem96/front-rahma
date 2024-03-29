import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';

@Component({
  selector: 'app-your-application',
  standalone: true,
  imports:[TitleSectionComponent],
  templateUrl: './your-application.component.html',
  styleUrls: []
})
export class YourApplicationComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-1',
    title: 'Your Applications',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
