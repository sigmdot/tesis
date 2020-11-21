import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Comentario } from '@core/model/comentario.model';
import { NotiComentario } from '@core/model/notifi-comentario.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notificaciones-comentario',
  templateUrl: './notificaciones-comentario.component.html',
  styleUrls: ['./notificaciones-comentario.component.css']
})
export class NotificacionesComentarioComponent implements OnInit, OnChanges {
  faPencilAlt = faPencilAlt;
  usuario$: Observable<Usuario>;
  @Output() emisorIndice: EventEmitter<NotiComentario> = new EventEmitter<NotiComentario>();
  @Input() notiComentario: NotiComentario;
  @Input() indice: number;
  constructor(private usuarioSvc: CollecionUsuariosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.usuario$ = this.usuarioSvc.getUsuario(this.notiComentario.idUsuarioEvaluado);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  emitirIndiceSeleccionado(){
    this.emisorIndice.emit(this.notiComentario);
  }

}
