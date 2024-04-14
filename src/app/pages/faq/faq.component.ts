import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { QuestionsComponent } from './questions/questions.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../qloud/components/header/header.component';
import { FooterComponent } from '../../qloud/components/footer/footer.component';
import { TopBannerComponent } from '../../qloud/components/top-banner/top-banner.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  standalone:true,
  imports:[  CommonModule, HeaderComponent, FooterComponent, TopBannerComponent, FaqComponent, QuestionsComponent, WorkingLanguageComponent, OurBlogComponent],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title:"FAQ"
  };

  List: any[] = [
    {
      img: './assets/images/blog/01.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Build Construction',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/02.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Official Terraform Provider',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/03.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'CCPA Compliance Update',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    }
  ];

  constructor(private plugins: PluginsService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    window.scrollTo(0, 0);

    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
