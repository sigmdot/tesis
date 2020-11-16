import { Component, Input, OnInit } from '@angular/core';
import { NotificacionesBasicasService } from '@core/service-providers/notificaciones-basicas/notificaciones-basicas.service';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notificaciones-basicas',
  templateUrl: './notificaciones-basicas.component.html',
  styleUrls: ['./notificaciones-basicas.component.css']
})
export class NotificacionesBasicasComponent implements OnInit {
  @Input() notiBasica: any;
  faLightbulb = faLightbulb;
  faCheck = faCheck;
  constructor(private notiSvc: NotificacionesBasicasService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  checkeado(){
    this.notiSvc.eliminarNotificacion(this.notiBasica.id);
  }

}
