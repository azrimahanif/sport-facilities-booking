import { Component, OnInit } from '@angular/core';
import {BookingInfo, BookingInfoService} from '../services/booking-info.service'

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.page.html',
  styleUrls: ['./facilities-list.page.scss'],
})
export class FacilitiesListPage implements OnInit {

  bookinginfo: BookingInfo[];
 
  constructor(private bookinginfoservice: BookingInfoService) { }

  ngOnInit() {

    this.bookinginfoservice.getBookings().subscribe(res => {
      this.bookinginfo = res;
    });
  }
 
  remove(item) {
    this.bookinginfoservice.removeBooking(item.id);
  }
  

}
