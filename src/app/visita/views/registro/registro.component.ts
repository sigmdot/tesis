import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  finalizarRegistro(){
    console.log('Registro finalizado usuario falso creado');
  }
}
