import { Component, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { PostulacionesCollecionService } from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-historial-usuario',
  templateUrl: './historial-usuario.component.html',
  styleUrls: ['./historial-usuario.component.css']
})
export class HistorialUsuarioComponent implements OnInit {
  trabajosSolicitado$: Observable<any> = null;
  trabajosConcretados$: Observable<any> = null;
  postuladosLista$: Observable<any> = null;
  trabajosRealizado$ = null;
  avisosPostulado$ = null;
  vista = 'empleador';
  constructor(private trabajosCollecionSvc: TrabajosCollecionService,
              private avisosSvc: AvisosTrabajosService,
              private postulacionesSvc: PostulacionesCollecionService,
              private authSvc: FireauthService) {
    this.authSvc.getCurrentUser().then(e => {
      this.avisosPostulado$ = this.avisosSvc.getAvisosPostuladosPorUsuario(e.uid); // trabajador
      this.trabajosSolicitado$ = this.avisosSvc.getAvisosSolicitadosPorUsuario(e.uid); // empleador
      this.trabajosRealizado$ = this.trabajosCollecionSvc.getTrabajosUsuariosTrabajador(e.uid); // trabajador
      this.trabajosConcretados$ = this.trabajosCollecionSvc.getTrabajosEmpleador(e.uid); // empleador
      this.postuladosLista$ = this.postulacionesSvc.getPostulacionesPorUsuarioPostulado(e.uid);
    });
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  cambiarPerfil(){
    // tslint:disable-next-line: no-conditional-assignment
    if (this.vista === 'empleador'){
      this.vista = 'trabajador';
    }
    else{
      this.vista = 'empleador';
    }
  }

}
