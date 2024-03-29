       // @ts-nocheck 
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input() logoImg: string;
  @Input() contactInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
