import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Restaurant } from '../../models/restaurant';
import { RestaurantServicesProvider } from '../../providers/restaurant-services/restaurant-services';

declare var google;

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  map: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    public restaurantService: RestaurantServicesProvider) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    this.getPosition();
    this.getRestaurants();
    
  }

  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map_canvas');
  
    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
  
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    //this.addMarker();

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Current Position!'
      });

      let content = "<p>This is your current position !</p>";          
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
      mapEle.classList.add('show-map');
    });
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(data => {
      console.log(data);
      for(let res of data){
        console.log('res');

        console.log(res.name);
        console.log(res.latitude);
        console.log(res.longitude);

        let resLatLng = new google.maps.LatLng(res.latitude, res.longitude);
                         
        let marker = new google.maps.Marker({
            position: resLatLng,
            map: this.map,
            title: res.name,
            snippet: res.description
        });

        let content = "<p>"+res.name+"<br>"+"<small>"+res.description+"</small>"+"</p>";          
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
  
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });
      }
    });

  }

  /*addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";          
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }*/

}
