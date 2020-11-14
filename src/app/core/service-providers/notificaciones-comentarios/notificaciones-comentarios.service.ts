import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';
import { NotiComentario } from '@core/model/notifi-comentario.model'
@Injectable({
  providedIn: 'root'
})
export class NotificacionesComentariosService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllNotificaciones(){
    return this.firestoreSvc.snapshotCollection<any>('notificacionesComentarios');
  }
  // tslint:disable-next-line: typedef
  public getNotificacionesUsuario(id: string){
    return this.firestoreSvc.snapshotCollection<any>('notificacionesComentarios', ref => ref.where('idUsuarioRecibir' , '==', id));
  }

  // tslint:disable-next-line: typedef
  public eliminarNotificacion(idNoti: string){
    return this.firestoreSvc.deleteDocument(`notificacionesComentarios/${idNoti}`);
  }

  // tslint:disable-next-line: typedef
  public crearNoti(noti: NotiComentario){
    noti.id = this.firestoreSvc.creatId();
    return this.firestoreSvc.addDocument('notificacionesComentarios', noti.id, noti);
  }
}
