import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';
import { BlogOwlComponent } from '../../../qloud/components/blog-owl/blog-owl.component';

@Component({
  selector: 'app-our-blog',
  standalone: true,
  imports:[TitleSectionComponent, BlogOwlComponent],

  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Recent Blog',
    subTitle: 'Blog'
  };

  List: any[] = [
    {
      img: './assets/images/blog/01.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Build Construction',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/02.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Official Terraform Provider',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/03.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'CCPA Compliance Update',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
