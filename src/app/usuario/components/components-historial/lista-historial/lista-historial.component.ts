import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit, OnChanges {
  @Input() lista: AvisoTrabajo[];
  listaFiltradaFinalizados: AvisoTrabajo[] = [];
  avisoSeleccionado: AvisoTrabajo;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.listaFiltradaFinalizados = this.lista.filter(aviso => aviso.estado === 'Finalizado');
  }
  ngOnInit(): void {
    
  }

  // tslint:disable-next-line: typedef
  capturarIndice(indice: number){
    console.log(indice);
    this.avisoSeleccionado = this.lista[indice];
  }
}
