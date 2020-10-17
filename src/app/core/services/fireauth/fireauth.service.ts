import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(private af: AngularFireAuth) { }

  // tslint:disable-next-line: typedef
  loginEmailPass(email: string, pass: string){
    return this.af.signInWithEmailAndPassword(email, pass);
  }

  // tslint:disable-next-line: typedef
  createUserEmailPass(email: string, pass: string){
    return this.af.createUserWithEmailAndPassword(email, pass);
  }

  // tslint:disable-next-line: typedef
  getCurrentUser(){
    return this.af.currentUser;
  }

}
