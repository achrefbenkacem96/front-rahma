import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-owl',
  templateUrl: './team-owl.component.html'
})
export class TeamOwlComponent implements OnInit {

  @Input() List: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
