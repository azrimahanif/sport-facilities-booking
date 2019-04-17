import { Component, OnInit } from '@angular/core';
import {Facilities, FacilitiesService} from '../services/booking-info.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.page.html',
  styleUrls: ['./facilities-list.page.scss'],
})
export class FacilitiesListPage implements OnInit {

  
  facilities: Facilities[];

  constructor(private facilitiesservice: FacilitiesService, private nav:NavController) { }

  ngOnInit() {

    this.facilitiesservice.getFacility().subscribe(res => {
      this.facilities = res;
    });
  }

  remove(item: { id: any; }) {
    this.facilitiesservice.removeFacility(item.id);
  }


}
