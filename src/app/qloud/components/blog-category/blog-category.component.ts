import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html'
})
export class BlogCategoryComponent implements OnInit {

  List: any[] = [
    { title: 'Marketing' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
