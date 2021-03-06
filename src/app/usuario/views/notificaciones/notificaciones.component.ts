import { Component, OnInit } from '@angular/core';
import { NotiComentario } from '@core/model/notifi-comentario.model';
import {NotificacionesBasicasService} from '@core/service-providers/notificaciones-basicas/notificaciones-basicas.service'
import {NotificacionesComentariosService} from '@core/service-providers/notificaciones-comentarios/notificaciones-comentarios.service'
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  notisBasica$: Observable<any>;
  notiComentario$: Observable<any>;
  notificacionCaptu: NotiComentario = null;
  constructor(
    private notiSvc: NotificacionesBasicasService,
    private notiComenSvc: NotificacionesComentariosService,
    private authSvc: FireauthService
    ) {
    const user = this.getUserFnc();
    user.then(e=>{
      this.notisBasica$ = this.notiSvc.getNotificacionesUsuario(e.uid);
      this.notiComentario$ = this.notiComenSvc.getNotificacionesUsuario(e.uid);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  capturarIndice(notiComentario: NotiComentario){
    this.notificacionCaptu = notiComentario;
  }

  // tslint:disable-next-line: typedef
  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }

}
