import { Component, OnInit } from '@angular/core';
import { TitleSectionComponent } from '../../../qloud/components/title-section/title-section.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  standalone: true,
  
  imports:[TitleSectionComponent, NgFor],

  styleUrls: []
})
export class PricingPlanComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Plans & Pricing ',
    subTitle: 'Pricing'
  };
  items: any[] = [
    {
      title: "Basic",
      description: "It is a long established fact that a reader will be distracted",
      price: "Free",
      plan_desc: "",
      duration: '0.6s',
      href: "#",
      services: [ { title: "Feedback System" }, { title: "Social Integration" } ,{ title: "Push Notifications " },{ title: "Relevant App Content" } ,{ title: "Log-in via Social Media " } ]
    },
    {
      title: "Premium",
      description: "It is a long established fact that a reader will be distracted",
      price: "$12",
      plan_desc: "/mo",
      active: true,
      duration: '1.2s',
      href: "#",
      services: [ { title: "Feedback System" }, { title: "Social Integration" } ,{ title: "Push Notifications " },{ title: "Relevant App Content" } ,{ title: "Log-in via Social Media " } ]
    },
    {
      title: "Business",
      description: "It is a long established fact that a reader will be distracted",
      price: "$38",
      plan_desc: "/mo",
      duration: '1.8s',
      href: "#",
      services: [ { title: "Feedback System" }, { title: "Social Integration" } ,{ title: "Push Notifications " },{ title: "Relevant App Content" } ,{ title: "Log-in via Social Media " } ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
