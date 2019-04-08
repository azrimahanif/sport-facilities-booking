import { Component, OnInit, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import {Facilities, FacilitiesService} from '../services/booking-info.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.page.html',
  styleUrls: ['./booking-info.page.scss'],
})




export class BookingInfoPage implements OnInit {


  facilities: Facilities = {
    Name: ' ',
    details: '',  
    img: ''
  }

  constructor(private nav: NavController, private route: ActivatedRoute, private facilitiesservice: FacilitiesService, private loadingController: LoadingController) { 
    // firebase.initializeApp(environment.firebase);
  }

  calendar = 0 ;
  facilityId = null;




  pushPage() {

    this.nav.navigateForward('/booking-details/' + this.calendar);
  }

  ngOnInit() {
    this.facilityId = this.route.snapshot.params['id'];
    if (this.facilityId){
      this.loadFacility();
    }
  }


  async loadFacility (){
    const loading = await this.loadingController.create({
      message: 'Loading Facility..'
    });
    await loading.present();

    this.facilitiesservice.getFacilities(this.facilityId).subscribe(res =>{
      loading.dismiss();
      this.facilities = res;
    });
  }

  
}
