import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';

@Component({
  selector: 'app-questions',
  standalone:true,
  imports:[  CommonModule, TitleSectionComponent ],
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Frequently Asked Questions',
    subTitle: 'Faq',
    titleIcon: ''
  };

  List: any[] = [
    { question: 'How Much Your Product Price?', answer:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.', active: true },
    { question: 'Do you improve your product continuously?', answer:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.'},
    { question: 'How Does Your Product Work?', answer:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.'},
    { question: 'This Book Is A Treatise On The Theory?', answer:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.'},
    { question: 'Where Does It Come From?', answer:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
