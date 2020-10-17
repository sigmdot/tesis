import { Component, Input, OnInit } from '@angular/core';
import { AvisoTrabajo } from '@model/aviso-trabajo.model';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.css']
})
export class ListaAvisosComponent implements OnInit {
  @Input() lista: AvisoTrabajo[];
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  filtrarAvisos(distancia: number){
    const avisos: AvisoTrabajo[] = null;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.lista.length; index++) {
      if (this.lista[index].distancia <= distancia){
        avisos.push(this.lista[index]);
      }
    }
    return avisos;
  }

}
