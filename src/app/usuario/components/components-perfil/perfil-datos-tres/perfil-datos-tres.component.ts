import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Comentario } from '@core/model/comentario.model';

@Component({
  selector: 'app-perfil-datos-tres',
  templateUrl: './perfil-datos-tres.component.html',
  styleUrls: ['./perfil-datos-tres.component.css']
})
export class PerfilDatosTresComponent implements OnInit, OnChanges {
  @Input() comentarios: Comentario[];
  comentario: Comentario = null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.comentarios != null) {
      this.comentario = this.comentarios[0];
    }
  }
  // tslint:disable-next-line: typedef
  capturarIndice(indice: number) {
    this.comentario = this.comentarios[indice];
  }
  ngOnInit(): void {
  }


}
