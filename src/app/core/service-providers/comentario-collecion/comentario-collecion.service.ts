import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';
import { Comentario } from '@core/model/comentario.model';
@Injectable({
  providedIn: 'root'
})
export class ComentarioCollecionService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllComentario(){
    // any remplazarlo por modelo
    return this.firestoreSvc.snapshotCollection<any>('comentarios');
  }

  // tslint:disable-next-line: typedef
  public getComentario(id: string){
    return this.firestoreSvc.snapshotDocument<any>(`comentarios/${id}`);
  }

  // tslint:disable-next-line: typedef
  public getComentariosUsuario(idUsuario: string){
    return this.firestoreSvc.snapshotCollection<Comentario>('comentarios', ref => ref.where('idUsuarioEvaluado', '==', idUsuario));
  }

  // tslint:disable-next-line: typedef
  public crearComentario(comentario: Comentario){
    comentario.id = this.firestoreSvc.creatId();
    return this.firestoreSvc.addDocument('comentarios', comentario.id, comentario);
  }
}
