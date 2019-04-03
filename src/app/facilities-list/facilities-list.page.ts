import { Component, OnInit } from '@angular/core';
import {BookingInfo, BookingInfoService} from '../services/booking-info.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.page.html',
  styleUrls: ['./facilities-list.page.scss'],
})
export class FacilitiesListPage implements OnInit {

  facility = '';
  bookinginfo: BookingInfo[];

  constructor(private bookinginfoservice: BookingInfoService, private nav:NavController) { }

  ngOnInit() {

    // this.bookinginfoservice.getBookings().subscribe(res => {
    //   this.bookinginfo = res;
    // });
  }

  // remove(item: { id: any; }) {
  //   this.bookinginfoservice.removeBooking(item.id);
  // }

  pushStadium() {
    this.facility = 'stadium';
    this.nav.navigateForward('/booking-info/' + this.facility);
  }
  pushHall() {
    this.facility = 'MSC-hall';
    this.nav.navigateForward('/booking-info/' + this.facility);
  }
}
