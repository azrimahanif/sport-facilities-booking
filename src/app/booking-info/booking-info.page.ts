import { Component, OnInit, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import {Facilities, FacilitiesService} from '../services/booking-info.service';
import {LoadingController} from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.page.html',
  styleUrls: ['./booking-info.page.scss'],
})




export class BookingInfoPage implements OnInit {


  facilities: Facilities ;

  constructor(private nav: NavController, private route: ActivatedRoute, private facilitiesservice: FacilitiesService, private loadingController: LoadingController, private db: AngularFirestore) { }

  date = 0 ;
  facilityId = 'iium';




  pushPage() {
    this.nav.navigateForward('/booking-details/' + this.date);
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
      this.facilities = res;
      loading.dismiss();
    });
  }


}
