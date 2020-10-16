import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Firebase
import { FirebaseModule } from './modules/firebase/firebase.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FirebaseModule
  ]
})
export class CoreModule { }
