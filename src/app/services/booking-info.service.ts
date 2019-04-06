import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export interface Facilities {
  id?: string;
  name: string;
  details: string;
  subdetails: string;
  img: string;
  timeAvailable: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  private facilitiesCollection: AngularFirestoreCollection<Facilities>;
 
  private facilities: Observable<Facilities[]>;
 
  constructor(db: AngularFirestore) {
    this.facilitiesCollection = db.collection<Facilities>('facilities');
 
    this.facilities = this.facilitiesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getFacility() {
    return this.facilities;
  }
 
  getFacilities(id) {
    return this.facilitiesCollection.doc<Facilities>(id).valueChanges();
  }
 
  updateFacility(facilities: Facilities, id: string) {
    return this.facilitiesCollection.doc(id).update(facilities);
  }
 
  addFacility(facilities: Facilities) {
    return this.facilitiesCollection.add(facilities);
  }
 
  removeFacility(id) {
    return this.facilitiesCollection.doc(id).delete();
  }
}
