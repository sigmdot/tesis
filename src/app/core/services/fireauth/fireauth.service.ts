import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

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
  createUserEmailPass(emailUser: string, passUser: string){
    return this.af.createUserWithEmailAndPassword(emailUser, passUser);
  }

  // tslint:disable-next-line: typedef
  getCurrentUser(){
    return this.af.currentUser;
  }

  // tslint:disable-next-line: typedef
  logOut(){
    return this.af.signOut();
  }

  // tslint:disable-next-line: typedef
  getUserAuth(){
    return this.af.authState.pipe(first()).toPromise();
  }
  

  // tslint:disable-next-line: typedef
  getToken(){
    return this.af.idToken;
  }

}
