import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Trabajo } from '@core/model/trabajo.model';

@Component({
  selector: 'app-lista-trabajos-realizados',
  templateUrl: './lista-trabajos-realizados.component.html',
  styleUrls: ['./lista-trabajos-realizados.component.css']
})
export class ListaTrabajosRealizadosComponent implements OnInit, OnChanges {
  @Input() listaTrabajoRealizados: Trabajo[];
  trabajoSelecc: Trabajo;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if ( (this.listaTrabajoRealizados != null) && (this.listaTrabajoRealizados != undefined)){
      this.listaTrabajoRealizados.filter(trabajo => trabajo.estado === 'Finalizado');
    }
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  capturarIndiceRealizado(indice: number){
    this.trabajoSelecc = this.listaTrabajoRealizados[indice];
  }

}
