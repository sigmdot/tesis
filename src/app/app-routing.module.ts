import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Angular Fire guard
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
// Guard
import {LoggedUserGuard} from 'src/app/guards/logged-user.guard';

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./visita/visita.module').then(module => module.VisitaModule),
    canActivate: [LoggedUserGuard]
  },
  {
    path: 'desktop',
    loadChildren: () => import('./usuario/usuario.module').then(module => module.UsuarioModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLanding }
  },
  {
    path: 'home',
    redirectTo: '/desktop/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
