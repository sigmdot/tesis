import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
// Vistas
import { LandingComponent } from 'src/app/views/landing/landing.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { RegistroComponent } from 'src/app/views/registro/registro.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VisitaRoutingModule,
    LandingComponent,
    LoginComponent,
    RegistroComponent
  ]
})
export class VisitaModule { }
