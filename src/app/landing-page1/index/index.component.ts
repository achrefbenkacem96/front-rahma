import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { OurBlogComponent } from '../components/our-blog/our-blog.component';
import { IconBoxComponent } from '../components/icon-box/icon-box.component';
import { NavTabsComponent } from '../components/nav-tabs/nav-tabs.component';
import { OurTestimonialComponent } from '../components/our-testimonial/our-testimonial.component';
import { PricingPlanComponent } from '../components/pricing-plan/pricing-plan.component';
import { RevolutionSlider1Component } from '../components/revolution-slider1/revolution-slider1.component';
import { SectionVerticalTwoComponent } from '../components/section-vertical-two/section-vertical-two.component';
import { YourApplicationComponent } from '../components/your-application/your-application.component';
import { SectionOneComponent } from '../components/section-one/section-one.component';
import { HeaderComponent } from '../../qloud/components/header/header.component';
import { FooterComponent } from '../../qloud/components/footer/footer.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  imports: [OurBlogComponent, HeaderComponent, FooterComponent, SectionOneComponent, IconBoxComponent, NavTabsComponent, OurTestimonialComponent, PricingPlanComponent, RevolutionSlider1Component, SectionVerticalTwoComponent, YourApplicationComponent],
  standalone: true,

  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  constructor(private plugins: PluginsService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    window.scrollTo(0, 0);

    const current = this;
    current.plugins.revolutionSlider();
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 200);


  }
}
