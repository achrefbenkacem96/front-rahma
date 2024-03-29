import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [NgIf],
  templateUrl: './title-section.component.html'
})
export class TitleSectionComponent implements OnInit {
  @Input() titleSectionProp: any;
  constructor() { }

  ngOnInit(): void {
  }

}
