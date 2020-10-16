import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './views/home/home.component';
import { HistorialUsuarioComponent } from './views/historial-usuario/historial-usuario.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';


@NgModule({
  declarations: [UsuarioComponent, HomeComponent, HistorialUsuarioComponent, PerfilUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
