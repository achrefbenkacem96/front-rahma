import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-box',
  templateUrl: './portfolio-box.component.html'
})
export class PortfolioBoxComponent implements OnInit {

  @Input() List: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
