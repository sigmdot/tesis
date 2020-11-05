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
// tslint:disable-next-line: max-line-length
import { TarjetaListaHistorialComponent } from './components/components-historial/tarjeta-lista-historial/tarjeta-lista-historial.component';
// tslint:disable-next-line: max-line-length
import { DetalleAvisoHistorialComponent } from './components/components-historial/detalle-aviso-historial/detalle-aviso-historial.component';
import { MapaDetallesAvisoComponent } from './components/components-historial/mapa-detalles-aviso/mapa-detalles-aviso.component';
import { TarjetaAvisoTrabajoActivoComponent } from './components/components-historial/tarjeta-aviso-trabajo-activo/tarjeta-aviso-trabajo-activo.component';
import { ListaPostuladosComponent } from './components/components-historial/lista-postulados/lista-postulados.component';
import { ConfirmacionBajaComponent } from './components/components-historial/confirmacion-baja/confirmacion-baja.component';
import { TarjetaPostuladoComponent } from './components/components-historial/tarjeta-postulado/tarjeta-postulado.component';
import { PerfilDatosUnoComponent } from './components/components-perfil/perfil-datos-uno/perfil-datos-uno.component';
import { PerfilDatosDosComponent } from './components/components-perfil/perfil-datos-dos/perfil-datos-dos.component';
import { PerfilDatosTresComponent } from './components/components-perfil/perfil-datos-tres/perfil-datos-tres.component';
import { TarjetaDatoUsuarioComponent } from './components/components-perfil/tarjeta-dato-usuario/tarjeta-dato-usuario.component';
import { TarjetaComentarioComponent } from './components/components-perfil/tarjeta-comentario/tarjeta-comentario.component';
// tslint:disable-next-line: max-line-length
import { ModalDetalleComentarioComponent } from './components/components-perfil/modal-detalle-comentario/modal-detalle-comentario.component';
import { ListaTrabajosRealizadosComponent } from './components/components-historial/lista-trabajos-realizados/lista-trabajos-realizados.component';
import { TarjetaHistorialRealizadosComponent } from './components/components-historial/tarjeta-historial-realizados/tarjeta-historial-realizados.component';
import { DetallesHistorialRealizadosComponent } from './components/components-historial/detalles-historial-realizados/detalles-historial-realizados.component';
import { MapaDetalleHistorialRealizadosTrabajosComponent } from './components/components-historial/mapa-detalle-historial-realizados-trabajos/mapa-detalle-historial-realizados-trabajos.component';
import { MapaDetalleHistorialPostuladosComponent } from './components/components-historial/mapa-detalle-historial-postulados/mapa-detalle-historial-postulados.component';
import { DetallesHistorialPostuladosComponent } from './components/components-historial/detalles-historial-postulados/detalles-historial-postulados.component';
import { TarjetaHistorialPostuladosComponent } from './components/components-historial/tarjeta-historial-postulados/tarjeta-historial-postulados.component';
import { CrearAvisoComponent } from './components/components-general/crear-aviso/crear-aviso.component';
import { MapaCrearAvisoComponent } from './components/components-general/mapa-crear-aviso/mapa-crear-aviso.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetalleAvisoComponent } from './components/components-home/detalle-aviso/detalle-aviso.component';
import { MapaDetalleAvisoLaboralComponent } from './components/components-home/mapa-detalle-aviso-laboral/mapa-detalle-aviso-laboral.component';
import { ListaAvisosActivosComponent } from './components/components-historial/lista-avisos-activos/lista-avisos-activos.component';
import { TarjetaAvisosActivosComponent } from './components/components-historial/tarjeta-avisos-activos/tarjeta-avisos-activos.component';
import { ListaTrabajosConcretadosComponent } from './components/components-historial/lista-trabajos-concretados/lista-trabajos-concretados.component';
import { ListaTrabajosActivosEmpleadorComponent } from './components/components-historial/lista-trabajos-activos-empleador/lista-trabajos-activos-empleador.component';
import { TarjetaTrabajosConcretadoComponent } from './components/components-historial/tarjeta-trabajos-concretado/tarjeta-trabajos-concretado.component';
import { TarjetaTrabajosActivosConcretadosComponent } from './components/components-historial/tarjeta-trabajos-activos-concretados/tarjeta-trabajos-activos-concretados.component';
import { ListaAvisosPostuladosPorUsuarioComponent } from './components/components-historial/lista-avisos-postulados-por-usuario/lista-avisos-postulados-por-usuario.component';
import { ListaTrabajosActivosComponent } from './components/components-historial/lista-trabajos-activos/lista-trabajos-activos.component';
import { TarjetaTrabajosActivosComponent } from './components/components-historial/tarjeta-trabajos-activos/tarjeta-trabajos-activos.component';

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
    TarjetaAvisoTrabajoActivoComponent,
    ListaPostuladosComponent,
    ConfirmacionBajaComponent,
    TarjetaPostuladoComponent,
    PerfilDatosUnoComponent,
    PerfilDatosDosComponent,
    PerfilDatosTresComponent,
    TarjetaDatoUsuarioComponent,
    TarjetaComentarioComponent,
    ModalDetalleComentarioComponent,
    ListaTrabajosRealizadosComponent,
    TarjetaHistorialRealizadosComponent,
    DetallesHistorialRealizadosComponent,
    MapaDetalleHistorialRealizadosTrabajosComponent,
    MapaDetalleHistorialPostuladosComponent,
    DetallesHistorialPostuladosComponent,
    TarjetaHistorialPostuladosComponent,
    CrearAvisoComponent,
    MapaCrearAvisoComponent,
    DetalleAvisoComponent,
    MapaDetalleAvisoLaboralComponent,
    ListaAvisosActivosComponent,
    TarjetaAvisosActivosComponent,
    ListaTrabajosConcretadosComponent,
    ListaTrabajosActivosEmpleadorComponent,
    TarjetaTrabajosConcretadoComponent,
    TarjetaTrabajosActivosConcretadosComponent,
    ListaAvisosPostuladosPorUsuarioComponent,
    ListaTrabajosActivosComponent,
    TarjetaTrabajosActivosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FontAwesomeModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuarioModule { }
