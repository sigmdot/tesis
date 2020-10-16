import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modulos/visita/visita.module').then(module => module.VisitaModule)
  },
  {
    path:'desktop',
    loadChildren: () => import('./modulos/usuario/usuario.module').then(module => module.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
