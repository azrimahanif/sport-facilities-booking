import { Component, OnInit, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.page.html',
  styleUrls: ['./booking-info.page.scss'],
})




export class BookingInfoPage implements OnInit {

  constructor(private nav: NavController, private route: ActivatedRoute) { 
    // firebase.initializeApp(environment.firebase);
  }

  calendar = 0 ;
  facility = '';
  img = '';




  pushPage() {

    this.nav.navigateForward('/booking-details/' + this.calendar);
  }

  ngOnInit() {
    // this.facility = this.route.snapshot.paramMap.get('id');

    // if (this.facility = 'stadium') {
    //   this.img = 'https://firebasestorage.googleapis.com/v0/b/test1-77191.appspot.com/o/STADIUM.jpg?alt=media&token=c3575779-cd85-412c-996e-42a92918eda6'
    // }

    // if (this.facility = 'MSC-hall') {
    //   this.img = 'https://firebasestorage.googleapis.com/v0/b/test1-77191.appspot.com/o/multipurpose%20hall%20msc.jpg?alt=media&token=cca4c401-7832-4ac4-b270-3e4af28d9a5a'
    // }
  }

}
