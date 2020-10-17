import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QueryFn } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  public snapshotCollection<type>(collection?: AngularFirestoreCollection, id?: string, queryFn?: QueryFn): Observable<type[]> {
    let col: AngularFirestoreCollection;

    // tslint:disable-next-line: triple-equals
    if ((collection != null)) {
      col = collection;
    }
    else { col = this.angularFirestore.collection(id, queryFn); }

    return col.snapshotChanges().pipe(map(snap => {
      return snap.map(doc => {
        /* console.log(doc.payload.doc.data()); */
        return doc.payload.doc.data() as type;
      });
    }));
  }

  public snapshotDocument<type>(document?: AngularFirestoreDocument, id?: string): Observable<any> {
    let doc: AngularFirestoreDocument;

    // tslint:disable-next-line: triple-equals
    if (document != null) {
      doc = document;
    }
    else { doc = this.angularFirestore.doc(id); }

    return doc.snapshotChanges().pipe(map(snap => {
      console.log(snap.payload.data());
      return snap.payload.data() as type;
    }));
  }


}
