import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export interface BookingInfo {
  id?: string;
  name: string;
  description: string;
  timeAvailable: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingInfoService {

  private bookingInfoCollection: AngularFirestoreCollection<BookingInfo>;
 
  private bookingsinfo: Observable<BookingInfo[]>;
 
  constructor(db: AngularFirestore) {
    this.bookingInfoCollection = db.collection<BookingInfo>('bookingsinfo');
 
    this.bookingsinfo = this.bookingInfoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getBookings() {
    return this.bookingsinfo;
  }
 
  getBooking(id) {
    return this.bookingInfoCollection.doc<BookingInfo>(id).valueChanges();
  }
 
  updateBooking(bookinginfo: BookingInfo, id: string) {
    return this.bookingInfoCollection.doc(id).update(bookinginfo);
  }
 
  addBooking(bookinginfo: BookingInfo) {
    return this.bookingInfoCollection.add(bookinginfo);
  }
 
  removeBooking(id) {
    return this.bookingInfoCollection.doc(id).delete();
  }
}
