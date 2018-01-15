import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Restaurant } from '../../models/restaurant';
import { RestaurantServicesProvider } from '../../providers/restaurant-services/restaurant-services';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  restaurants: Restaurant[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public restaurantService: RestaurantServicesProvider,
    public alertCtrl: AlertController) {
      let suscriptor =restaurantService.getRestaurants().subscribe(data => {
        this.restaurants = data;
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

}
