import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { HistorialTrabajosRealizadosComponent } from './views/historial-trabajos-realizados/historial-trabajos-realizados.component';
import { HistorialUsuarioComponent } from './views/historial-usuario/historial-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { NotificacionesComponent } from './views/notificaciones/notificaciones.component';
import { PerfilTrabajadorComponent } from './views/perfil-trabajador/perfil-trabajador.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'historial',
        component: HistorialUsuarioComponent
      },
      {
        path: 'perfil',
        component: PerfilUsuarioComponent
      },
      {
        path: 'trabajador/:id',
        component: PerfilTrabajadorComponent
      },
      {
        path: 'notificaciones',
        component: NotificacionesComponent
      },
      {
        path: 'trabajosRealizados',
        component: HistorialTrabajosRealizadosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
