import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';
import {NotiBasica} from '@core/model/notifi-basica.model'
@Injectable({
  providedIn: 'root'
})
export class NotificacionesBasicasService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllNotificaciones(){
    return this.firestoreSvc.snapshotCollection<any>('notificaciones');
  }
  // tslint:disable-next-line: typedef
  public getNotificacionesUsuario(id: string){
    return this.firestoreSvc.snapshotCollection<any>('notificaciones', ref => ref.where('idUsuarioRecibir' , '==', id));
  }

  // tslint:disable-next-line: typedef
  public eliminarNotificacion(idNoti: string){
    return this.firestoreSvc.deleteDocument(`notificaciones/${idNoti}`);
  }

  // tslint:disable-next-line: typedef
  public crearNoti(noti: NotiBasica){
    noti.id = this.firestoreSvc.creatId();
    return this.firestoreSvc.addDocument('notificaciones', noti.id, noti);
  }

}
