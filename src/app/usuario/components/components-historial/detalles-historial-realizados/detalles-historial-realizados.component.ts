import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalles-historial-realizados',
  templateUrl: './detalles-historial-realizados.component.html',
  styleUrls: ['./detalles-historial-realizados.component.css']
})
export class DetallesHistorialRealizadosComponent implements OnInit, OnChanges {
  @Input() trabajoDetalle: Trabajo;
  usuarioEmpleador$: Observable<Usuario>;
  avisoAsociado$: Observable<AvisoTrabajo>;
  constructor(private userColleSvc: CollecionUsuariosService, private avisoCollecSvc: AvisosTrabajosService) { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: triple-equals
    if ( (changes.trabajoDetalle.currentValue !== undefined) && (changes.trabajoDetalle.currentValue !== null) ) {
      this.usuarioEmpleador$ = this.userColleSvc.getUsuario(this.trabajoDetalle.idUsuarioEmpleador);
      this.avisoAsociado$ = this.avisoCollecSvc.getAviso(this.trabajoDetalle.idAvisoAsociado);
    }
  }

}
