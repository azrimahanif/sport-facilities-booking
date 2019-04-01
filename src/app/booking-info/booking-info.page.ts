import { Component, OnInit, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.page.html',
  styleUrls: ['./booking-info.page.scss'],
})




export class BookingInfoPage implements OnInit {

  calendar = 0 ;

  constructor(private nav: NavController) { 
    firebase.initializeApp(environment.firebase);
  }

  pushPage() {

    this.nav.navigateForward('/booking-details/' + this.calendar);
  }

  ngOnInit() {
  }
  
  imgstadium = 'https://firebasestorage.googleapis.com/v0/b/test1-77191.appspot.com/o/STADIUM.jpg?alt=media&token=c3575779-cd85-412c-996e-42a92918eda6'
}
