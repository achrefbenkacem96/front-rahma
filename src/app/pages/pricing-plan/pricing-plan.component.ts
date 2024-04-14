import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { TopBannerComponent } from '../../qloud/components/top-banner/top-banner.component';
import { HeaderComponent } from '../../qloud/components/header/header.component';
import { FooterComponent } from '../../qloud/components/footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  standalone:true,
  imports: [TopBannerComponent, HeaderComponent, FooterComponent, PlanComponent, OurBlogComponent, WorkingLanguageComponent ],

  encapsulation: ViewEncapsulation.None
})
export class PricingPlanComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title: "Pricing"
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
