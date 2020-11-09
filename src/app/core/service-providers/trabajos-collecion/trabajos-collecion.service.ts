import { Injectable } from '@angular/core';
import { Trabajo } from '@core/model/trabajo.model';
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
  public getTrabajosUsuariosTrabajador(id: string){
    return this.firestoreSvc.snapshotCollection<any>('trabajos', ref => ref.where('idUsuarioTrabajador', '==', id));
  }

  // tslint:disable-next-line: typedef
  public getTrabajosEmpleador(id: string){
    return this.firestoreSvc.snapshotCollection<any>('trabajos', ref => ref.where('idUsuarioEmpleador', '==', id));
  }

  // tslint:disable-next-line: typedef
  public actualizarEstadoTrabajo(id: string, data: string){
    return this.firestoreSvc.updateDocument(`trabajos/${id}`, {estado: data});
  }

  // tslint:disable-next-line: typedef
  public finalizarFecha(id: string, data: Date){
    return this.firestoreSvc.updateDocument(`trabajos/${id}`, {fechaTermino: data});
  }

  public crearTrabajo(trabajo:Trabajo){
    trabajo.id = this.firestoreSvc.creatId();
    return this.firestoreSvc.addDocument('trabajos',trabajo.id,trabajo);
  }
}
