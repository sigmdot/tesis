import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
// Vistas
import { LandingComponent } from 'src/app/visita/views/landing/landing.component';
import { LoginComponent } from 'src/app/visita/views/login/login.component';
import { RegistroComponent } from 'src/app/visita/views/registro/registro.component';

// Componentes Landing
import { BannerComponent } from 'src/app/visita/components/components-landing/banner/banner.component';
import { BarraNavegacionComponent } from 'src/app/visita/components/components-landing/barra-navegacion/barra-navegacion.component';
import { InfoFeaturesComponent } from 'src/app/visita/components/components-landing/info-features/info-features.component';

// Componentes Registro
import { FormularioUnoComponent } from 'src/app/visita/components/components-registro/formulario-uno/formulario-uno.component';
import { FormularioDosComponent } from './components/components-registro/formulario-dos/formulario-dos.component';
import { FormularioTresComponent } from './components/components-registro/formulario-tres/formulario-tres.component';

// Angular material
import { MatStepperModule } from '@angular/material/stepper';
import { VisitaComponent } from './visita.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegistroComponent,
    BannerComponent,
    BarraNavegacionComponent,
    InfoFeaturesComponent,
    FormularioUnoComponent,
    VisitaComponent,
    FormularioDosComponent,
    FormularioTresComponent
  ],
  imports: [
    VisitaRoutingModule,
    CommonModule,
    MatStepperModule
  ]
})
export class VisitaModule { }
