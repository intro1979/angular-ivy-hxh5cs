
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Invoice } from './invoice';


@Injectable({
  providedIn: 'root'
})
export class RouteService {
  invoiceRef: AngularFirestoreCollection<Invoice>;
  private dbPath = '/invoices';
  invoices: Observable<Invoice[]>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.invoiceRef = afs.collection<Invoice>(this.dbPath);
    this.invoices = this.invoiceRef.valueChanges();

  }

  AddInvoice(invoice: Invoice) {
      return new Promise<any>((resolve, reject)=> {
        this.afs
          .collection('invoices')
          .add(Invoice)
          .then(res => {}, error => {
            this.errorMgmt(error)
          });
      })
    }
  updateIvoice(data) {
    return this.afs
      .collection('invoices')
      .doc(data.payload.doc.id)
      .set({completed: true}, {merge: true});
  }

  getInvoices() {
    return this.afs.collection('invoices').snapshotChanges();
  }

  deleteInvoice(data) {
    return this.afs
      .collection('invoices')
      .doc(data.payload.doc.id)
      .delete();
  }
  // Error management
  private errorMgmt(error) {
    console.log(error);
  }
}
