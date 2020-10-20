import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '@core/model/usuario.model';

@Component({
  selector: 'app-perfil-datos-uno',
  templateUrl: './perfil-datos-uno.component.html',
  styleUrls: ['./perfil-datos-uno.component.css']
})
export class PerfilDatosUnoComponent implements OnInit {
  @Input() usuario: Usuario;
  
  constructor() { }

  ngOnInit(): void {
  }

}
