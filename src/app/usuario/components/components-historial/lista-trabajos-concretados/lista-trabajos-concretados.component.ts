import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';

@Component({
  selector: 'app-lista-trabajos-concretados',
  templateUrl: './lista-trabajos-concretados.component.html',
  styleUrls: ['./lista-trabajos-concretados.component.css']
})
export class ListaTrabajosConcretadosComponent implements OnInit, OnChanges {
  @Input() listaTrabajosConcre: Trabajo[];
  listaFinalizadoTrabajoConcre: Trabajo[] = [];
  trabajoConcretadoSeleccionado: Trabajo;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.listaTrabajosConcre != null) {
      this.listaFinalizadoTrabajoConcre = this.listaTrabajosConcre.filter(trabajo => trabajo.estado === 'Finalizado');
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  capturarIndice(indice: number){
    console.log(indice, ' CAPTURADO ');
    this.trabajoConcretadoSeleccionado = this.listaFinalizadoTrabajoConcre[indice];
    console.log(this.trabajoConcretadoSeleccionado, ' ACA EL SELECCIONADO ');
  }

}
