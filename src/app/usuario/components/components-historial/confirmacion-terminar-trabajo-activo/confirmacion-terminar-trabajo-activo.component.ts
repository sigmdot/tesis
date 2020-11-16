import { Component, Input, OnInit } from '@angular/core';
import { NotiComentario } from '@core/model/notifi-comentario.model';
import { Trabajo } from '@core/model/trabajo.model';
import { NotificacionesComentariosService } from '@core/service-providers/notificaciones-comentarios/notificaciones-comentarios.service';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-confirmacion-terminar-trabajo-activo',
  templateUrl: './confirmacion-terminar-trabajo-activo.component.html',
  styleUrls: ['./confirmacion-terminar-trabajo-activo.component.css']
})
export class ConfirmacionTerminarTrabajoActivoComponent implements OnInit {
  confirmarAccion = false;
  @Input() trabajo: Trabajo;
  constructor(
    private trabajoSvc: TrabajosCollecionService,
    private toastr: ToastrService,
    private notiComentario: NotificacionesComentariosService
    ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  terminarTrabajo(){
    const date = new Date();
    this.trabajoSvc.actualizarEstadoTrabajo(this.trabajo.id, 'Finalizado');
    this.trabajoSvc.finalizarFecha(this.trabajo.id, date).then( () => {
      $('#modalTerminarTrabajo').modal('toggle');
      this.toastr.success('Se finalizo con exito este trabajo!');
    }
    );
    const notiEvaluacionTrabajador: NotiComentario = {
      idAvisoAsoc : this.trabajo.idAvisoAsociado,
      idUsuarioEvaluado : this.trabajo.idUsuarioEmpleador,
      idUsuarioRecibir : this.trabajo.idUsuarioTrabajador,
      mensaje : 'Evalue al usuario'
    }
    const notiEvaluacionEmpleador: NotiComentario ={
      idAvisoAsoc: this.trabajo.idAvisoAsociado,
      idUsuarioEvaluado: this.trabajo.idUsuarioTrabajador,
      idUsuarioRecibir: this.trabajo.idUsuarioEmpleador,
      mensaje: 'Evalue al usuario'
    }
    this.notiComentario.crearNoti(notiEvaluacionEmpleador);
    this.notiComentario.crearNoti(notiEvaluacionTrabajador);
  }
}
