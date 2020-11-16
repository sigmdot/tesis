import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';
import { MapaDetalleHistorialRealizadosTrabajosComponent } from '../mapa-detalle-historial-realizados-trabajos/mapa-detalle-historial-realizados-trabajos.component';

@Component({
  selector: 'app-detalles-historial-realizados',
  templateUrl: './detalles-historial-realizados.component.html',
  styleUrls: ['./detalles-historial-realizados.component.css']
})
export class DetallesHistorialRealizadosComponent implements OnInit, OnChanges , AfterViewChecked {
  @Input() trabajoDetalle: Trabajo;
  usuarioEmpleador$: Observable<Usuario>;
  avisoAsociado$: Observable<AvisoTrabajo>;
  @ViewChild(MapaDetalleHistorialRealizadosTrabajosComponent) mapa: MapaDetalleHistorialRealizadosTrabajosComponent;
  constructor(private userColleSvc: CollecionUsuariosService, private avisoCollecSvc: AvisosTrabajosService) { }
  ngAfterViewChecked(): void {
    if((this.mapa.mapaDetalleHistorialRealizados !== null)&&(this.mapa.mapaDetalleHistorialRealizados !== undefined)){
      this.mapa.mapaDetalleHistorialRealizados.resize();
    }
  }
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
