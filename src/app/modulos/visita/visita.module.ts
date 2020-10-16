import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
// Vistas
import { LandingComponent } from 'src/app/views/landing/landing.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { RegistroComponent } from 'src/app/views/registro/registro.component';

// Componentes Landing
import { BannerComponent } from 'src/app/components/components-landing/banner/banner.component';
import { BarraNavegacionComponent } from 'src/app/components/components-landing/barra-navegacion/barra-navegacion.component';


@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegistroComponent,
    BannerComponent,
    BarraNavegacionComponent
  ],
  imports: [
    VisitaRoutingModule,
    CommonModule
  ]
})
export class VisitaModule { }
