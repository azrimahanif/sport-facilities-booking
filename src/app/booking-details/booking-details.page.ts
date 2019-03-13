import { Booking, BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {

  booking: Booking = {

  };

  bookingId = null;
 
  constructor(private route: ActivatedRoute, private nav: NavController, private bookingService: BookingService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.bookingId = this.route.snapshot.params['id'];
    if (this.bookingId)  {
      this.loadBooking();
    }
  }
 
  async loadBooking() {
    const loading = await this.loadingController.create({
      message: 'Loading Booking..'
    });
    await loading.present();
 
    this.bookingService.getBooking(this.bookingId).subscribe(res => {
      loading.dismiss();
      this.booking = res;
    });
  }
 
  async saveBooking() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Booking..'
    });
    await loading.present();
 
    if (this.bookingId) {
      this.bookingService.updateBooking(this.booking, this.bookingId).then(() => {
        loading.dismiss();
        // this.nav.navigateBack('facilities-list');
      });
    } else {
      this.bookingService.addBooking(this.booking).then(() => {
        loading.dismiss();
        // this.nav.navigateBack('facilities-list');
      });
    }
  }

}
