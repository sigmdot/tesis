import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CollecionUsuariosService {

  constructor(private firestoreSvc: FirestoreService) { }

  // tslint:disable-next-line: typedef
  public getAllUsuario(){
    // any remplazarlo por modelo
    return this.firestoreSvc.snapshotCollection<any>(null, 'usuarios');
  }

  // tslint:disable-next-line: typedef
  public getAviso(id: string){
    return this.firestoreSvc.snapshotDocument<any>(null, `usuarios/${id}`);
  }

}
