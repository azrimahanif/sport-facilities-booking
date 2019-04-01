import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
// import { BookingInfo, BookingInfoService } from '../services/booking-info.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.page.html',
  styleUrls: ['./staff-dashboard.page.scss'],
})
export class StaffDashboardPage implements OnInit {
  userEmail: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService
    // private getInfo : BookingInfoService
  ) { }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
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

}
