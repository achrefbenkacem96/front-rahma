import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';

@Component({
  selector: 'app-working-language',
  standalone:true,
  imports:[  CommonModule, TitleSectionComponent ],

  templateUrl: './working-language.component.html'
})
export class WorkingLanguageComponent implements OnInit {

  titleSectionProp: any = {
    class: 'iq-title-box-2',
    title: 'Work with the language you already love',
    subTitle: 'Language',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
    titleClass: 'text-white',
    descClass: 'text-white'
  };

  Languages: any[] = [
    { title: 'Public Cloud' },
    { title: 'Private Cloud' },
    { title: 'Virtual Private Cloud' },
    { title: 'Tally-as-a-Service' },
    { title: 'Banking Community Cloud' },
    { title: 'Load Balancing' }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
