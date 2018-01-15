import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList} from 'angularfire2/database/interfaces';
import { Restaurant } from '../../models/restaurant';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the RestaurantServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantServicesProvider {

  restaurants: AngularFireList<Restaurant>;

  constructor(public http: HttpClient,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase) {
    console.log('Hello RestaurantServicesProvider Provider');
    //this.restaurants = db.list('/restaurants/'+afAuth.auth.currentUser.uid);
    this.restaurants = db.list('/restaurants/');
  }

  getRestaurants(): Observable<Restaurant[]>{
    //this.http.get('url');
    return this.restaurants.valueChanges();
  }

  addRestaurant(restaurant: Restaurant){
    //return this.create.push(restaurant);
    this.db.list('/restaurants/').push(restaurant);
    let toast = this.toastCtrl.create({
      message: "Restaurant creado existosamente",
      duration: 3000
    });
    toast.present();
  }
}
