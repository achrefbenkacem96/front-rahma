import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-banner',
  standalone:true,
  templateUrl: './top-banner.component.html',
})
export class TopBannerComponent implements OnInit {

  @Input()  data : any;
  
  constructor() { }

  ngOnInit() {
  }

}
