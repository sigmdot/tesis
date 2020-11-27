import { Injectable, Type } from '@angular/core';
import * as firebase from 'firebase';
import {
  AngularFireStorage
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploaderImagerService {

  constructor(private storage:AngularFireStorage) { }
  private uploadTask: firebase.storage.UploadTask;
  private basePath:string = '/Usuarios';
  uploadFoto(file: any, userId:string){
    let storageRef = firebase.storage().ref();
    return this.uploadTask = storageRef.child(`${this.basePath}/${userId}`).put(file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
      return this.uploadTask.snapshot.downloadURL as string;
    });

  }

  fileRef(path: string){
    return this.storage.ref(path);
  }
}
