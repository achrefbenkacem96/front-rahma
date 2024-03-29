import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html'
})
export class BlogCardComponent implements OnInit {
  
  @Input() blogList: any[];
  @Input() lg: string;
  @Input() md: string;
  constructor() { }

  ngOnInit(): void {
  }

}
