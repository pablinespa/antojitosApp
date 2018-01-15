import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;

  constructor(public navCtrl: NavController,
    private geolocation: Geolocation) {
    
  }

  

}
