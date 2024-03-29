import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { HeaderComponent } from '../../qloud/components/header/header.component';
import { TopBannerComponent } from '../../qloud/components/top-banner/top-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { IconBoxComponent } from './icon-box/icon-box.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { FooterComponent } from '../../qloud/components/footer/footer.component';

@Component({
  selector: 'app-about-us-two',
  templateUrl: './about-us-two.component.html',
  standalone:true,
  imports:[HeaderComponent, FooterComponent, TopBannerComponent, AboutUsComponent, FeaturesComponent, IconBoxComponent, OurBlogComponent, WorkingLanguageComponent],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsTwoComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title:"About Us 2"
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
