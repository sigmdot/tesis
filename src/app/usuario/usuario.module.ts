import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
// Vistas
import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './views/home/home.component';
import { HistorialUsuarioComponent } from './views/historial-usuario/historial-usuario.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
// Componentes Home
import { ListaAvisosComponent } from './components/components-home/lista-avisos/lista-avisos.component';
import { TarjetaAvisoComponent } from './components/components-home/tarjeta-aviso/tarjeta-aviso.component';
import { MapaHomeComponent } from './components/components-home/mapa-home/mapa-home.component';

// Core module
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    UsuarioComponent,
    HomeComponent,
    HistorialUsuarioComponent,
     PerfilUsuarioComponent,
     ListaAvisosComponent,
     TarjetaAvisoComponent,
     MapaHomeComponent
    ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CoreModule
  ]
})
export class UsuarioModule { }
