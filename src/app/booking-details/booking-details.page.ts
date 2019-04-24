import { Booking, BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {

  calendar = '';
  bookingId = null;
  facilityId = null;

  booking: Booking = {
    date: this.route.snapshot.paramMap.get('date'),
    bookingtime: new Date().getTime(),
    facilityId: this.route.snapshot.paramMap.get('myid')

  };

  
 
  constructor(private route: ActivatedRoute, private nav: NavController, private bookingService: BookingService, private loadingController: LoadingController, public alertController: AlertController, private zone: NgZone) { }
 
  ngOnInit() {


    
    this.facilityId = this.route.snapshot.paramMap.get('myid');
    this.calendar = this.route.snapshot.params['date'];
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
    await this.presentAlert();
    
  }

  async presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();
  
    const alert = await alertController.create({
      header: 'SUCCESS!',
      subHeader: 'Your Booking have been Save',
      message: 'Booking status will be notify by email.',
      buttons: [        {
        text: 'Ok',
        handler: () => {
            this.zone.run(async () => {
              await this.nav.navigateBack('facilities-list');
            });
        }
      }]
    });
    return await alert.present();
            
  }


}
