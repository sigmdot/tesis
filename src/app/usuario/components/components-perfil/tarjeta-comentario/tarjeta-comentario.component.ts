import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '@core/model/comentario.model';
import { faSignLanguage, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.css']
})
export class TarjetaComentarioComponent implements OnInit {
  iconComentario;
  nombreTrabajo;
  constructor() { }
  @Input() comentario: Comentario;
  ngOnInit(): void {
    if (this.comentario.nota > 3){
       this.iconComentario = faThumbsUp;
    }
    if (this.comentario.nota < 3){
      this.iconComentario = faThumbsDown;
    }
    // tslint:disable-next-line: triple-equals
    if (this.comentario.nota == 3){
      this.iconComentario = faSignLanguage;
    }
    this.nombreTrabajo = 'nombre trabajo cool';
  }

}
