import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionesBasicasService } from '@core/service-providers/notificaciones-basicas/notificaciones-basicas.service';
import { NotificacionesComentariosService } from '@core/service-providers/notificaciones-comentarios/notificaciones-comentarios.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { faHome, faClock, faPlus, faUser, faSignOutAlt, faBell, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fix-navbar',
  templateUrl: './fix-navbar.component.html',
  styleUrls: ['./fix-navbar.component.css']
})
export class FixNavbarComponent implements OnInit {
  faHome = faHome;
  faClock = faClock;
  faPlus = faPlus;
  faUser = faUser;
  faBell = faBell;
  faBriefcase = faBriefcase;
  faSignOutAlt = faSignOutAlt;
  notisBasica$: Observable<any>;
  notiComentario$: Observable<any>;
  constructor(
    private authSvc: FireauthService,
    private router: Router,
    private notiSvc: NotificacionesBasicasService,
    private notiComenSvc: NotificacionesComentariosService
    ) {
    const user = this.getUserFnc();
    user.then(e => {
      this.notisBasica$ = this.notiSvc.getNotificacionesUsuario(e.uid);
      this.notiComentario$ = this.notiComenSvc.getNotificacionesUsuario(e.uid);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  signOut(){
    this.authSvc.logOut().then(()=>{this.router.navigate(['/'])});
  }
  // tslint:disable-next-line: typedef
  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }

}
