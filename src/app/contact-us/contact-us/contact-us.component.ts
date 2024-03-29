import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../qloud/components/title-section/title-section.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NgFor, TitleSectionComponent],
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-2',
    title: 'Get In Touch',
    subTitle: 'Contact With US  ',
    titleIcon: '',
    description: 'It is a long established fact that a reader will be distracted'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
