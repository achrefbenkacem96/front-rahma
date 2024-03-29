import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-meta',
  templateUrl: './blog-meta.component.html'
})
export class BlogMetaComponent implements OnInit {

  List: any[] = [
    { title: 'Log in' },
    { title: 'Entries feed' },
    { title: 'Comments feed' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
