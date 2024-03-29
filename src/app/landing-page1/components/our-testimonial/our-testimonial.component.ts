import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';
import { TestimonialsComponent } from '../../../qloud/components/testimonials/testimonials.component';

@Component({
  selector: 'app-our-testimonial',
  standalone: true,
  imports:[TitleSectionComponent, TestimonialsComponent],

  templateUrl: './our-testimonial.component.html'
})
export class OurTestimonialComponent implements OnInit {

  titleSectionProp: any = {
    class: 'iq-title-box-2',
    title: 'Some Awesome Words By Our Customers',
    subTitle: 'Testimonial',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
