import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { PostulacionesCollecionService } from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapaDetallesAvisoComponent } from '../mapa-detalles-aviso/mapa-detalles-aviso.component';

declare var $: any;

@Component({
  selector: 'app-detalle-aviso-historial',
  templateUrl: './detalle-aviso-historial.component.html',
  styleUrls: ['./detalle-aviso-historial.component.css']
})
export class DetalleAvisoHistorialComponent implements OnInit, OnChanges, OnDestroy, AfterViewChecked {
  @Input() avisoDetalle: AvisoTrabajo;
  @ViewChild(MapaDetallesAvisoComponent) mapa: MapaDetallesAvisoComponent;
  usuario$: Observable<Usuario> = null;
  postulacion$: Observable<any> = null;
  detallesAviso = {
    nombre: null,
    desc: null,
    ubicacion: null,
    estado: null,
    cantidadPostulados: null,
    foto: null
  };
  constructor(private userCollecSvc: CollecionUsuariosService, private postulacionesSvc: PostulacionesCollecionService) {}
  ngAfterViewChecked(): void {
    if (this.mapa.mapaDetalleHistorial){
      this.mapa.mapaDetalleHistorial.resize();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: triple-equals
    if ((changes.avisoDetalle.currentValue != undefined) && (changes.avisoDetalle.currentValue !== null)) {
      this.detallesAviso.nombre = this.avisoDetalle.nombreAviso;
      if (this.avisoDetalle.usuariosPostulados != null) {
        this.detallesAviso.cantidadPostulados = this.avisoDetalle.usuariosPostulados.length;
      }
      this.detallesAviso.desc = this.avisoDetalle.descAviso;
      this.detallesAviso.ubicacion = this.avisoDetalle.ubicacion;
      this.detallesAviso.estado = this.avisoDetalle.estado;
      this.usuario$ = this.userCollecSvc.getUsuario(this.avisoDetalle.idUsuarioPosteador);
      this.postulacion$ = this.postulacionesSvc.getPostulacionesPorAviso(this.avisoDetalle.id);
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
  }

  cerrarModal(): void {
    $('#modalDetalleHistorial').modal('hide');
    $('#modalDetalleHistorial').on('hidden.bs.modal', (e) => {
      // la e logea evento jquery.
      $('#modalDetalleHistorial').modal('dispose');
    });
    this.avisoDetalle = null;
  }

}
