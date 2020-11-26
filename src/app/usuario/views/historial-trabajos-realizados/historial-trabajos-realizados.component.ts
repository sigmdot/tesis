import { Component, OnInit } from '@angular/core';
import { PostulacionesCollecionService } from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historial-trabajos-realizados',
  templateUrl: './historial-trabajos-realizados.component.html',
  styleUrls: ['./historial-trabajos-realizados.component.css']
})
export class HistorialTrabajosRealizadosComponent implements OnInit {
  trabajosRealizado$ = null;
  postuladosLista$: Observable<any> = null;
  constructor(
    private trabajosCollecionSvc: TrabajosCollecionService,
    private postulacionesSvc: PostulacionesCollecionService,
    private authSvc: FireauthService
  ) {
    this.authSvc.getCurrentUser().then(e => {
      this.trabajosRealizado$ = this.trabajosCollecionSvc.getTrabajosUsuariosTrabajador(e.uid); // trabajador
      this.postuladosLista$ = this.postulacionesSvc.getPostulacionesPorUsuarioPostulado(e.uid); // trabajador
    });
   }

  ngOnInit(): void {
  }

}
