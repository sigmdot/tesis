import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';
@Injectable({
  providedIn: 'root'
})
export class AvisosTrabajosService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllAvisos(){
    // any remplazarlo por modelo
    return this.firestoreSvc.snapshotCollection<any>(null, 'avisosTrabajos');
  }

  // tslint:disable-next-line: typedef
  public getAviso(id: string){
    return this.firestoreSvc.snapshotDocument<any>(null, `avisosTrabajos/${id}`);
  }

  // tslint:disable-next-line: typedef
  public getAvisoByStatus(estado: string){
    return this.firestoreSvc.snapshotCollection<any>(null,'avisosTrabajos', ref => ref.where('estado', '==', estado));
  }

}
