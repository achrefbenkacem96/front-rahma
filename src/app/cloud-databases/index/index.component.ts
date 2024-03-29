import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  logoImage = './assets/images/logo-black.png';
  footerlogoImg = './assets/images/logo.png';
  classHeader = 'header2';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  constructor(private plugins: PluginsService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    const current = this;
    current.plugins.revolutionSlider();
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
