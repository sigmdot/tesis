import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';
import { MapaDetalleHistorialPostuladosComponent } from '../mapa-detalle-historial-postulados/mapa-detalle-historial-postulados.component';

@Component({
  selector: 'app-detalle-avisos-postulado-por-usuario',
  templateUrl: './detalle-avisos-postulado-por-usuario.component.html',
  styleUrls: ['./detalle-avisos-postulado-por-usuario.component.css']
})
export class DetalleAvisosPostuladoPorUsuarioComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() idAviso: AvisoTrabajo;
  @ViewChild(MapaDetalleHistorialPostuladosComponent) mapa: MapaDetalleHistorialPostuladosComponent;
  avisos$: Observable<AvisoTrabajo>;
  usuarioo$: Observable<Usuario>;
  constructor(private usuarioSvc: CollecionUsuariosService) { }
  ngAfterViewChecked(): void {
    if(this.mapa !== undefined){
      if(this.mapa.mapaDetallePostulado != null){
        this.mapa.mapaDetallePostulado.resize();
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ((this.idAviso !== undefined)&&(this.idAviso !== null)) {
      this.usuarioo$ = this.usuarioSvc.getUsuario(this.idAviso.idUsuarioPosteador);
    }
  }

  ngOnInit(): void {
  }

}
