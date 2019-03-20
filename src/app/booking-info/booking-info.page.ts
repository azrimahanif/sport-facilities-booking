import { Component, OnInit, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.page.html',
  styleUrls: ['./booking-info.page.scss'],
})




export class BookingInfoPage implements OnInit {

  calendar = 0 ;

  constructor(private nav: NavController) { }

  pushPage() {

    this.nav.navigateForward('/booking-details/' + this.calendar);
  }

  ngOnInit() {
  }

}
