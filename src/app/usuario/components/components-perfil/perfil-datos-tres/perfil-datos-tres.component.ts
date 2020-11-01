import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '@core/model/comentario.model';

@Component({
  selector: 'app-perfil-datos-tres',
  templateUrl: './perfil-datos-tres.component.html',
  styleUrls: ['./perfil-datos-tres.component.css']
})
export class PerfilDatosTresComponent implements OnInit {
  @Input() comentarios: Comentario[];
  constructor() { }

  ngOnInit(): void {
  }

}
