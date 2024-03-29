import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact-card.component.html'
})
export class ContactCardComponent implements OnInit {

  List: any[] = [
    { title: 'Location', icon: 'ion ion-ios-location' , desc: '1234 North Avenue Luke Lane, South Bend, IN 360001'},
    { title: 'Email', icon: 'ion ion-ios-email' , desc: 'support@iqonicthemes.com'},
    { title: 'Phone', icon: 'ion ion-ios-telephone' , desc: '+91 123 456 7890'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
