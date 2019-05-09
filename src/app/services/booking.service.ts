import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




export interface Booking {
  id?: string;
  date: string;
  bookingtime: number;
  facilityId: string;
  status: string;

}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingCollection: AngularFirestoreCollection<Booking>;
 
  private bookings: Observable<Booking[]>;
 
  constructor(db: AngularFirestore) {
    this.bookingCollection = db.collection<Booking>('Bookings');
 
    this.bookings = this.bookingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getBookings(): Observable<Booking[]> {
    return this.bookings;
  }
 
  getBooking(id) {
    return this.bookingCollection.doc<Booking>(id).valueChanges();
  }
 
  updateBooking(booking: Booking, id: string) {
    return this.bookingCollection.doc(id).update(booking);
  }
 
  addBooking(booking: Booking) {
    return this.bookingCollection.add(booking);
  }
 
  removeBooking(id) {
    return this.bookingCollection.doc(id).delete();
  }
}
