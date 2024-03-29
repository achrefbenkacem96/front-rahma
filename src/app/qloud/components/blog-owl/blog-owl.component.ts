 // @ts-nocheck 
import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-owl',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog-owl.component.html'
})
export class BlogOwlComponent implements OnInit {

  @Input() blogList: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
