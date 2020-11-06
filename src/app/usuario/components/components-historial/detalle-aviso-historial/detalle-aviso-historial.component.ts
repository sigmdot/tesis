import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
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
  detallesAviso = {
    nombre: null,
    desc: null,
    ubicacion: null,
    estado: null,
    cantidadPostulados: null,
    foto: null
  };
  constructor(private userCollecSvc: CollecionUsuariosService) {}
  ngAfterViewChecked(): void {
    if (this.mapa.mapaDetalleHistorial){
      this.mapa.mapaDetalleHistorial.resize();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.avisoDetalle);
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
      this.usuario$.subscribe(e => {
        this.detallesAviso.foto = e.foto;
      });
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    console.log('me activo');
  }

  cerrarModal(): void {
    console.log('Cerrado');
    $('#modalDetalleHistorial').modal('hide');
    $('#modalDetalleHistorial').on('hidden.bs.modal', (e) => {
      // la e logea evento jquery.
      $('#modalDetalleHistorial').modal('dispose');
    });
    this.avisoDetalle = null;
  }

}
