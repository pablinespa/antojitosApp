import { Component, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant';

/**
 * Generated class for the RestaurantListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'restaurant-list',
  templateUrl: 'restaurant-list.html'
})
export class RestaurantListComponent {

  @Input() listRestaurants: Restaurant[];

  constructor() {
    console.log('Hello RestaurantListComponent Component');
  }

}
