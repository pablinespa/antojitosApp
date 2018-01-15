import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Restaurant } from '../../models/restaurant';
import { RestaurantServicesProvider } from '../../providers/restaurant-services/restaurant-services';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HomePage } from '../home/home';
import { MapsPage } from '../maps/maps';
import { RestaurantPage } from '../restaurant/restaurant';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public restaurant: Restaurant = new Restaurant();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth: AngularFireAuth, 
              public toastCtrl: ToastController,
              public restaurantProvider: RestaurantServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    this.restaurantProvider.addRestaurant(this.restaurant);
    //todo en caso de erro
    //this.navCtrl.pop();
    this.navCtrl.push(RestaurantPage);
  }

  /*register(){
    console.log(this.restaurant);
    this.afAuth.auth.createUserWithEmailAndPassword(this.restaurant.email, this.restaurant.password)
    .then(result => {
      let toast = this.toastCtrl.create({
        message: "Restaurant creado existosamente",
        duration: 3000
      });
      toast.present();
      this.navCtrl.push(HomePage);
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000
      });
      toast.present();
      console.error(err);
    });
  }*/
}
