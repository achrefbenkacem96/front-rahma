import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-recent-post',
  templateUrl: './blog-recent-post.component.html'
})
export class BlogRecentPostComponent implements OnInit {

  List: any[] = [
    { title: 'Official Terraform Provider' },
    { title: 'CCPA Compliance Update' },
    { title: 'Introducing Object Storage!' },
    { title: 'Content Marketing' },
    { title: 'Life Lack Meaning' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
