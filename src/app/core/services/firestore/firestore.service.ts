import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action, AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction, DocumentSnapshot, QueryFn } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  public creatId(): string {
    return this.angularFirestore.createId();
  }

  // tslint:disable-next-line: typedef
  public stringFormat(string: string) {
    return string
      .trim()
      .toLowerCase()
  }

  public snapshotCollection<type>(path?: string, queryFn?: QueryFn): Observable<type[]> {
    const collection: AngularFirestoreCollection<type> = this.angularFirestore.collection<type>(path, queryFn);
    return collection.snapshotChanges()
      .pipe(map((snapshot: DocumentChangeAction<type>[]) => {
        let data: type[] = snapshot.map((doc: DocumentChangeAction<type>) => {
          return doc.payload.doc.data() as type;
        });
        console.log(data);
        return data;
      }));
  }

  public snapshotDocument<type>(path?: string): Observable<type> {
    const document: AngularFirestoreDocument<type> = this.angularFirestore.doc<type>(path);
    return document.snapshotChanges()
      .pipe(map((snapshot: Action<DocumentSnapshot<type>>) => {
        console.log(snapshot.payload.data());
        return snapshot.payload.data() as type;
      }));
  }

  public addDocument<type>(path: string, id: string, data: type): Promise<void> {
    return this.angularFirestore.collection<type>(path).doc<type>(id).set(data);
  }

  public deleteDocument(path: string): Promise<void> {
    return this.angularFirestore.doc(path).delete();
  }

  public updateDocument<type>(path: string, data: Partial<type>): Promise<void> { // Aca en path se traspasa el camino completo
    return this.angularFirestore.doc<Partial<type>>(path).update(data);
  }


}
