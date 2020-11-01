import { Component, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';

@Component({
  selector: 'app-historial-usuario',
  templateUrl: './historial-usuario.component.html',
  styleUrls: ['./historial-usuario.component.css']
})
export class HistorialUsuarioComponent implements OnInit {
  trabajosSolicitado$ = null;
  trabajosRealizado$ = null;
  avisosPostulado$ = null;

  constructor(private trabajosCollecionSvc: TrabajosCollecionService,
              private avisosSvc: AvisosTrabajosService,
              private authSvc: FireauthService) {
    this.authSvc.getCurrentUser().then(e => {
      this.avisosPostulado$ = this.avisosSvc.getAvisosPostuladosPorUsuario(e.uid);
      this.trabajosSolicitado$ = this.avisosSvc.getAvisosSolicitadosPorUsuario(e.uid);
      this.trabajosRealizado$ = this.trabajosCollecionSvc.getTrabajosUsuariosTrabajador(e.uid);
    });
  }

  ngOnInit(): void {

  }

}
