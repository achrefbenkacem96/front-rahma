import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone:true,
  imports: [NgFor],

  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit {

  List: any[] = [
    {
      name: 'Haris Morgan',
      designation: 'Designer, Qloud',
      desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
      image: 'assets/images/testimonial/01.png'
    },
    {
      name: 'Nik Jorden',
      designation: 'Designer, Qloud',
      desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
      image: 'assets/images/testimonial/02.png'
    },
    {
      name: 'Rinks Cooper',
      designation: 'Designer, Qloud',
      desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
      image: 'assets/images/testimonial/03.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
