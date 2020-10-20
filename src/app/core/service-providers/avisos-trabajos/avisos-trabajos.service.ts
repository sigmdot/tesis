import { Injectable } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { FirestoreService } from '@core/services/firestore/firestore.service';
@Injectable({
  providedIn: 'root'
})
export class AvisosTrabajosService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllAvisos(){
    // any remplazarlo por modelo
    return this.firestoreSvc.snapshotCollection<any>('avisosTrabajos');
  }

  // tslint:disable-next-line: typedef
  public getAviso(id: string){
    return this.firestoreSvc.snapshotDocument<any>(`avisosTrabajos/${id}`);
  }

  // tslint:disable-next-line: typedef
  public getAvisoByStatus(estado: string){
    // tslint:disable-next-line: whitespace
    return this.firestoreSvc.snapshotCollection<any>('avisosTrabajos', ref => ref.where('estado', '==', estado));
  }

  // tslint:disable-next-line: typedef
  public createAviso(aviso: AvisoTrabajo){
    aviso.id = this.firestoreSvc.creatId();
    return this.firestoreSvc.addDocument('avisosTrabajos', aviso.id, aviso);
  }
  // Se pasa el path completo /avisoTrabajo/id
  // tslint:disable-next-line: typedef
  public deleteAviso(aviso: AvisoTrabajo){
    return this.firestoreSvc.deleteDocument(`avisosTrabajos/${aviso.id}`);
  }
  // Devuelve avisos al que el usuario se postulo
  // tslint:disable-next-line: typedef
  public getAvisosPostuladosPorUsuario(id: string){
    return this.firestoreSvc.snapshotCollection<any>('avisosTrabajos', ref => ref.where('usuariosPostulados', 'array-contains', id));
  }

  // tslint:disable-next-line: typedef
  public setEstado(id: string , data: string){
    return this.firestoreSvc.updateDocument(`avisosTrabajos/${id}`, {estado: data});
  }

  // tslint:disable-next-line: typedef
  public getAvisosSolicitadosPorUsuario(id: string){
    return this.firestoreSvc.snapshotCollection<any>('avisosTrabajos', ref => ref.where('idUsuarioPosteador', '==', id));
  }

}
