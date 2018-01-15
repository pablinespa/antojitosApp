import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RestaurantListComponent } from '../components/restaurant-list/restaurant-list';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { RestaurantServicesProvider } from '../providers/restaurant-services/restaurant-services';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { MapsPage } from '../pages/maps/maps';

export const configFirebase = {
  apiKey: "AIzaSyD7CzPWmlFnmSS6WVosb7O17oWNN_JzWM4",
  authDomain: "daring-research-182601.firebaseapp.com",
  databaseURL: "https://daring-research-182601.firebaseio.com",
  projectId: "daring-research-182601",
  storageBucket: "daring-research-182601.appspot.com",
  messagingSenderId: "818127267799"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    RestaurantPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    RestaurantPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantServicesProvider,
    HttpClient,
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class AppModule {}
