import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { NotiBasica } from '@core/model/notifi-basica.model';
import { Postulacion } from '@core/model/postulacion.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { NotificacionesBasicasService } from '@core/service-providers/notificaciones-basicas/notificaciones-basicas.service';
import { PostulacionesCollecionService } from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-avisos-activos',
  templateUrl: './lista-avisos-activos.component.html',
  styleUrls: ['./lista-avisos-activos.component.css']
})
export class ListaAvisosActivosComponent implements OnInit, OnChanges {
  @Input() listaAvisos: AvisoTrabajo[];
  listaAvisosFiltradaActivo: AvisoTrabajo[] = [];
  listaPostuladosSelect$: Observable<any[]> = null;
  idAviso: string;
  idAvisoBorrable: string;
  indiceATerminarPost: number;
  listaPostuladoSuscripcion: Observable<any[]> = null;
  constructor(
    private avisoSvc: AvisosTrabajosService,
    private postulacionSvc: PostulacionesCollecionService,
    private bajarPostulacionSvc: PostulacionesCollecionService,
    private notiSvc: NotificacionesBasicasService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.listaAvisos != null) {
      this.listaAvisosFiltradaActivo = this.listaAvisos.filter(aviso => aviso.estado === 'activo');
    }
  }
  // tslint:disable-next-line: typedef
  capturarIndice(indice: number){
    this.listaPostuladosSelect$ = this.postulacionSvc.getPostulacionesPorAviso(this.listaAvisosFiltradaActivo[indice].id);
  }
  // tslint:disable-next-line: typedef
  capturarIndiceParaBorrar(indice: number){
    this.idAvisoBorrable = this.listaAvisosFiltradaActivo[indice].id;
    this.indiceATerminarPost = indice;
  }
  // tslint:disable-next-line: typedef
  capturarIndiceParaFinalizarPostulaciones(indice: number){
    this.listaPostuladoSuscripcion = this.postulacionSvc.getPostulacionesPorAviso(this.listaAvisosFiltradaActivo[indice].id);
    this.listaPostuladoSuscripcion.subscribe(postulaciones => {
      postulaciones.forEach(postulacion => {
        let noti: NotiBasica = {
          idAvisoAsoc: this.listaAvisosFiltradaActivo[indice].id,
          idUsuarioRecibir: postulacion.idUsuarioPostulado,
          mensaje: 'Este aviso ' + this.listaAvisosFiltradaActivo[indice].nombreAviso + ' fue borrado'
        }
        this.notiSvc.crearNoti(noti);
        this.bajarPostulacionSvc.actualizarPostulacion(postulacion.id, 'Finalizado');
      });
    });
  
  }

}
