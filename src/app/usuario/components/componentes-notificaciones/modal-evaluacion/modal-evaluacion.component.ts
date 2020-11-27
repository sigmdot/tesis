import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comentario } from '@core/model/comentario.model';
import { NotiComentario } from '@core/model/notifi-comentario.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { ComentarioCollecionService } from '@core/service-providers/comentario-collecion/comentario-collecion.service';
import { NotificacionesComentariosService } from '@core/service-providers/notificaciones-comentarios/notificaciones-comentarios.service';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-modal-evaluacion',
  templateUrl: './modal-evaluacion.component.html',
  styleUrls: ['./modal-evaluacion.component.css']
})
export class ModalEvaluacionComponent implements OnInit, OnChanges {
  @Input() notificacionDatos: NotiComentario;
  usuario$: Observable<Usuario>;
  constructor(
    private usuarioSvc: CollecionUsuariosService,
    private comentarioSvc: ComentarioCollecionService,
    private notiComentaSvc: NotificacionesComentariosService
  ) { }
  formularioEvaluacionUsuario: FormGroup = new FormGroup({
    nota: new FormControl('', [Validators.required]),
    comentario: new FormControl('', [Validators.required, Validators.minLength(20)])
  }, {
    validators: [this.formValidator]
  });
  ngOnChanges(changes: SimpleChanges): void {
    this.usuario$ = this.usuarioSvc.getUsuario(this.notificacionDatos.idUsuarioEvaluado);
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  formValidator(g: FormGroup) {
    // tslint:disable-next-line: max-line-length
    if ((g.get('nota').value != null) && (g.get('comentario').value != null)) {
      return null;
    }
    return { datosEnNulo: true };
  }
  // tslint:disable-next-line: typedef
  crearComentario() {
    const comentario: Comentario = {
      idTrabajo: this.notificacionDatos.idAvisoAsoc,
      idUsuarioEvaluado: this.notificacionDatos.idUsuarioEvaluado,
      nota: this.formularioEvaluacionUsuario.value.nota,
      comentarioEmpleador: this.formularioEvaluacionUsuario.value.comentario
    };
    this.comentarioSvc.crearComentario(comentario).then(() => {
      $('#evaluacionModal').modal('toggle');
      this.notiComentaSvc.eliminarNotificacion(this.notificacionDatos.id);
    }
    );
  }
}
