import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Firebase
import { FirebaseModule } from './modules/firebase/firebase.module';
// Service - Providers
import { AvisosTrabajosService } from './service-providers/avisos-trabajos/avisos-trabajos.service';
// Font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FirebaseModule,
    FontAwesomeModule,
    FirebaseModule,
    ToastrModule.forRoot()
  ],
  providers: [AvisosTrabajosService]
})
export class CoreModule { }
