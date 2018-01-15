import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { RestaurantPage } from '../restaurant/restaurant';
import { MapsPage } from '../maps/maps';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapsPage;
  tab2Root = RegisterPage;
  tab3Root = RestaurantPage;

  constructor() {

  }
}
