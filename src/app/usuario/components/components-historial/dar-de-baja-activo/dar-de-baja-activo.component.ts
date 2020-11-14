import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NotiBasica } from '@core/model/notifi-basica';
import { Postulacion } from '@core/model/postulacion.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { NotificacionesBasicasService } from '@core/service-providers/notificaciones-basicas/notificaciones-basicas.service';
import { PostulacionesCollecionService } from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-dar-de-baja-activo',
  templateUrl: './dar-de-baja-activo.component.html',
  styleUrls: ['./dar-de-baja-activo.component.css']
})
export class DarDeBajaActivoComponent implements OnInit, OnChanges {
  confirmar = false;
  postulaciones$: Observable<Postulacion[]>;
  @Input() idAviso: string;
  @Input() indice: number;
  @Output() emitirIndceParaFinalizarPostulaciones: EventEmitter<number> = new EventEmitter<number>();
  listado$: Observable<any[]>;

  constructor(
    private avisosTrabajosSvc: AvisosTrabajosService,
    private toastr: ToastrService,
    private postulacionSv: PostulacionesCollecionService,
    private notiSvc: NotificacionesBasicasService,
    private bajarPostulacionSvc: PostulacionesCollecionService
    ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.idAviso, ' HOLA ACÁ');
    this.postulaciones$ = this.postulacionSv.getPostulacionesPorAviso(this.idAviso);
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  confirmarAccion() {
    console.log(this.confirmar);
  }

  // tslint:disable-next-line: typedef
  borrarAviso() {
    this.emitirIndceParaFinalizarPostulaciones.emit(this.indice);
    /* this.listado$ = this.postulacionSv.getPostulacionesPorAviso(this.idAviso);
    this.listado$.subscribe(postulaciones => {
      postulaciones.forEach(postulacion => {
        console.log(postulacion);
        let noti: NotiBasica = {
          idAvisoAsoc: this.idAviso,
          idUsuarioRecibir: postulacion.idUsuarioPostulado,
          mensaje: 'Un aviso al fue borrado'
        }
        console.log(noti);
        this.notiSvc.crearNoti(noti);
        this.bajarPostulacionSvc.actualizarPostulacion(postulacion.id, 'Finalizado');
      });
    }); */
    this.avisosTrabajosSvc.setEstado(this.idAviso, 'Finalizado').then(e => {

      $('#modalDarDeBaja').modal('hide');
      $('#modalDarDeBaja').on('hidden.bs.modal', () => {
        $('#modalDarDeBaja').modal('dispose');
      });
      this.toastr.success('Fue dado de baja tú aviso con exito');
    });
    this.confirmar = false;
  }

}
