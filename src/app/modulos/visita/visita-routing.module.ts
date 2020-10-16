import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/views/landing/landing.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { RegistroComponent } from 'src/app/views/registro/registro.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent
},
{
  path: 'Login',
  component: LoginComponent
},
{
  path: 'registro',
  component: RegistroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
