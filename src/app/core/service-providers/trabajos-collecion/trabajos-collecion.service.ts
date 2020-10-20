import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajosCollecionService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAlltrabajos(){
    return this.firestoreSvc.snapshotCollection<any>('trabajos');
  }

  // tslint:disable-next-line: typedef
  public getTrabajo(id: string){
    return this.firestoreSvc.snapshotDocument<any>(`trabajos/${id}`);
  }

  // tslint:disable-next-line: typedef
  public getTrabajosUsuarios(id: string){
    return this.firestoreSvc.snapshotCollection<any>('trabajos',ref => ref.where('idUsuarioTrabajador', '==', id));
  }
}
