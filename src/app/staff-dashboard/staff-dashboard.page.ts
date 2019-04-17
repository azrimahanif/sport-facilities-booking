import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Booking, BookingService } from './../services/booking.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.page.html',
  styleUrls: ['./staff-dashboard.page.scss'],
})
export class StaffDashboardPage implements OnInit {
  userEmail: string;
  private bookings: Observable<Booking[]>; // edited line

  constructor(
    private navCtrl: NavController,
    public bookingInfoService: BookingService,
    private authService: AuthenticateService,

  ) { }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
      // this.bookingInfoService.getBookings().subscribe(res => {
      //   this.bookings = res});
      // this.loadBooking();
      this.bookings = this.bookingInfoService.getBookings(); // edited line
    }
    else{
      this.navCtrl.navigateBack('');
    }
  }

  // getBooking(id) {
  //   return this.getInfo.getBooking(id);
  // }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }


  // loadBooking ()
  // {
  //       this.bookingInfoService.getBookings().subscribe(res => {
  //       this.info = res})
  // }

}
