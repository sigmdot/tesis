import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';
import { MapaDetalleTrabajosActivoComponent } from '../mapa-detalle-trabajos-activo/mapa-detalle-trabajos-activo.component';

@Component({
  selector: 'app-detalle-trabajo-activo',
  templateUrl: './detalle-trabajo-activo.component.html',
  styleUrls: ['./detalle-trabajo-activo.component.css']
})
export class DetalleTrabajoActivoComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() avisoAMostrar: AvisoTrabajo;
  usuario$: Observable<Usuario>;
  @ViewChild(MapaDetalleTrabajosActivoComponent) map: MapaDetalleTrabajosActivoComponent;
  constructor(private usuarioSvc: CollecionUsuariosService) { }
  ngAfterViewChecked(): void {
    if(this.map !== undefined){
      if(this.map.mapaDetalleAvisoTrabajoActivo !== null){
        this.map.mapaDetalleAvisoTrabajoActivo.resize();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((this.avisoAMostrar !== undefined) && (this.avisoAMostrar !== null)) {
      this.usuario$ = this.usuarioSvc.getUsuario(this.avisoAMostrar.idUsuarioPosteador);
    }
  }

  ngOnInit(): void {
  }

}
