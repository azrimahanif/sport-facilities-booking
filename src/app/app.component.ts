import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


// const config = {
//   apiKey: 'AIzaSyDAVTuuOeG9EgZ3o6Hh1MLwiXllvf1XqmA',
//   authDomain: 'test1-77191.firebaseapp.com',
//   databaseURL: 'https://test1-77191.firebaseio.com',
//   projectId: 'test1-77191',
//   storageBucket: 'test1-77191.appspot.com',
//   messagingSenderId: '457755052207'
// };

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/facilities-list',
      icon: 'home'
    },
    {
      title: 'Staff Login',
      url: '/staff-login',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // firebase.initializeApp(config);
  }
}
