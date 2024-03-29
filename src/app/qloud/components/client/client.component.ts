import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

  @Input() Images: any[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
