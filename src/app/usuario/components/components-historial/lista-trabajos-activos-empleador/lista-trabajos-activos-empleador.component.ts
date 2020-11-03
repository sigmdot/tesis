import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Trabajo } from '@core/model/trabajo.model';

@Component({
  selector: 'app-lista-trabajos-activos-empleador',
  templateUrl: './lista-trabajos-activos-empleador.component.html',
  styleUrls: ['./lista-trabajos-activos-empleador.component.css']
})
export class ListaTrabajosActivosEmpleadorComponent implements OnInit,OnChanges {
  @Input() listaTrabajoActivo: Trabajo[];
  listaFiltrada: Trabajo[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.listaFiltrada = this.listaTrabajoActivo.filter(trabajo => trabajo.estado === 'activo');
  }

  ngOnInit(): void {
  }

}
