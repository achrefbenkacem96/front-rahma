
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopBannerComponent } from '../qloud/components/top-banner/top-banner.component';
import { HeaderComponent } from '../qloud/components/header/header.component';
import { FooterComponent } from '../qloud/components/footer/footer.component';
import { topMenuBarItems } from '../../constants/menu';
import { PluginsService } from '../qloud/plugins.service';

@Component({
  selector: 'app-contact-us2',
  templateUrl: './contact-us2.component.html',
  standalone: true,
  imports: [CommonModule, TopBannerComponent, HeaderComponent, FooterComponent, ContactUs2Component, ContactCardComponent, ContactUsComponent],

  encapsulation: ViewEncapsulation.None
})
export class ContactUs2Component implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title: "Contact Us 2"
  };

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
