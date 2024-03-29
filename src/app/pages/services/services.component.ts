import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { TopBannerComponent } from '../../qloud/components/top-banner/top-banner.component';
import { HeaderComponent } from '../../qloud/components/header/header.component';
import { FooterComponent } from '../../qloud/components/footer/footer.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [TopBannerComponent, HeaderComponent, FooterComponent, OurServicesComponent, OurBlogComponent, WorkingLanguageComponent ],
  standalone: true,
})

export class ServicesComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title:"Services"
  };
  
  constructor(private plugins: PluginsService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }


}
