import { Component, Input, OnInit } from '@angular/core';
import { Trabajo } from '@core/model/trabajo.model';

@Component({
  selector: 'app-lista-trabajos-realizados',
  templateUrl: './lista-trabajos-realizados.component.html',
  styleUrls: ['./lista-trabajos-realizados.component.css']
})
export class ListaTrabajosRealizadosComponent implements OnInit {
  @Input() listaTrabajoRealizados: Trabajo[];
  trabajoSelecc: Trabajo;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  capturarIndiceRealizado(indice: number){
    this.trabajoSelecc = this.listaTrabajoRealizados[indice];
    console.log(this.trabajoSelecc);
    console.log(indice);
  }

}
