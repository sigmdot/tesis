import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notificaciones-comentario',
  templateUrl: './notificaciones-comentario.component.html',
  styleUrls: ['./notificaciones-comentario.component.css']
})
export class NotificacionesComentarioComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
