import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Firebase
import { FirebaseModule } from './modules/firebase/firebase.module';
// Service - Providers
import { AvisosTrabajosService } from './service-providers/avisos-trabajos/avisos-trabajos.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FirebaseModule
  ],
  providers: [AvisosTrabajosService]
})
export class CoreModule { }
