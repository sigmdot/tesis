import { Component, OnInit } from '@angular/core';
import {NotificacionesBasicasService} from '@core/service-providers/notificaciones-basicas/notificaciones-basicas.service'
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  notisBasica$: Observable<any>;
  constructor(private notiSvc: NotificacionesBasicasService,private authSvc: FireauthService) { 
    const user = this.getUserFnc();
    user.then(e=>{
      this.notisBasica$ = this.notiSvc.getNotificacionesUsuario(e.uid);
    })
  }

  ngOnInit(): void {
  }

  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }

}
