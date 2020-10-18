import { Injectable } from '@angular/core';
import { FirestoreService } from '@core/services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CollecionUsuariosService {

  constructor(private firestoreSvc: FirestoreService) { }
}
