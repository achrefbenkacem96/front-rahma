import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html'
})
export class BlogArchiveComponent implements OnInit {

  List: any[] = [
    { year : 'February 2020' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
