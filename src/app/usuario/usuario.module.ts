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

// Componentes Historial
import { ListaHistorialComponent } from './components/components-historial/lista-historial/lista-historial.component';

// Componentes generales
import { FixNavbarComponent } from './components/components-general/fix-navbar/fix-navbar.component';

// Core module
import { CoreModule } from '@core/core.module';

// Fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TarjetaListaHistorialComponent } from './components/components-historial/tarjeta-lista-historial/tarjeta-lista-historial.component';
import { DetalleAvisoHistorialComponent } from './components/components-historial/detalle-aviso-historial/detalle-aviso-historial.component';
import { MapaDetallesAvisoComponent } from './components/components-historial/mapa-detalles-aviso/mapa-detalles-aviso.component';
import { TarjetaAvisoTrabajoActivoComponent } from './components/components-historial/tarjeta-aviso-trabajo-activo/tarjeta-aviso-trabajo-activo.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    HomeComponent,
    HistorialUsuarioComponent,
    PerfilUsuarioComponent,
    ListaAvisosComponent,
    TarjetaAvisoComponent,
    MapaHomeComponent,
    FixNavbarComponent,
    ListaHistorialComponent,
    TarjetaListaHistorialComponent,
    DetalleAvisoHistorialComponent,
    MapaDetallesAvisoComponent,
    TarjetaAvisoTrabajoActivoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FontAwesomeModule,
    CoreModule
  ]
})
export class UsuarioModule { }
