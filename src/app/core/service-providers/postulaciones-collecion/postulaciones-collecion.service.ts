import { Injectable } from '@angular/core';
import { Postulacion } from '@core/model/postulacion.model';
import { FirestoreService } from '@core/services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class PostulacionesCollecionService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllPostulaciones(){
    return this.firestoreSvc.snapshotCollection<any>('postulaciones');
  }
  // tslint:disable-next-line: typedef
  public getPostulacionesPorAviso(idAviso: string){
    return this.firestoreSvc.snapshotCollection<any>('postulaciones', ref => ref.where('idAviso' , '==', idAviso));
  }
  // tslint:disable-next-line: typedef
  public createPostulacion(postulacion: Postulacion){
    postulacion.id = this.firestoreSvc.creatId();
    return this.firestoreSvc.addDocument('postulaciones', postulacion.id, postulacion);
  }
  // tslint:disable-next-line: typedef
  public actualizarPostulacion(id: string, data: string){
    return this.firestoreSvc.updateDocument(`postulaciones/${id}`, {estado: data});
  }
  // tslint:disable-next-line: typedef
  public getPostulacionesPorUsuarioPostulado(idUsuario: string){
    return this.firestoreSvc.snapshotCollection<any>('postulaciones', ref => ref.where('idUsuarioPostulado' , '==', idUsuario));
  }
}
