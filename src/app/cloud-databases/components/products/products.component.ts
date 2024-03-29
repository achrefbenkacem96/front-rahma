import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Powerful Control Panel & APIs',
    subTitle: 'Products',
    titleIcon: '',
  };

  List: any[] = [
    { title: 'Cloud SQL', btnText: 'Find out More', image: './assets/images/product/01.png', desc: 'It is a long established fact that a the areader will be distracted.' },
    { title: 'Cloud Spanner', btnText: 'Find out More', image: './assets/images/product/02.png', desc: 'It is a long established fact that a the areader will be distracted.' },
    { title: 'Cloud Memorystore', btnText: 'Find out More', image: './assets/images/product/03.png', desc: 'It is a long established fact that a the areader will be distracted.' },
    { title: 'Cloud Firestore', btnText: 'Find out More', image: './assets/images/product/04.png', desc: 'It is a long established fact that a the areader will be distracted.' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
