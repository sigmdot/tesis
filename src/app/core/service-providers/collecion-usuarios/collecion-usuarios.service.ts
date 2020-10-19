import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';
import {Usuario} from '@core/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CollecionUsuariosService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllUsuario(){
    // any remplazarlo por modelo
    return this.firestoreSvc.snapshotCollection<any>('usuarios');
  }

  // tslint:disable-next-line: typedef
  public getUsuario(id: string){
    return this.firestoreSvc.snapshotDocument<any>(`usuarios/${id}`);
  }

  // tslint:disable-next-line: typedef
  public createUsuario(usuario: Usuario, id: string){
    usuario.id = id;
    return this.firestoreSvc.addDocument('usuarios', usuario.id, usuario);
  }

  // tslint:disable-next-line: typedef
  public setFotoUsuario(id: string, data: string){
    return this.firestoreSvc.updateDocument(`usuarios/${id}`, {foto: data});
  }

  public setRut(id: string, data: string){
    return this.firestoreSvc.updateDocument(`usuarios/${id}`,{rut: data});
  }

}
