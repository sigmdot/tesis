import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-trabajos-activos-empleador',
  templateUrl: './lista-trabajos-activos-empleador.component.html',
  styleUrls: ['./lista-trabajos-activos-empleador.component.css']
})
export class ListaTrabajosActivosEmpleadorComponent implements OnInit, OnChanges {
  @Input() listaTrabajoActivo: Trabajo[];
  listaFiltrada: Trabajo[];
  avisoAsociado$: Observable<AvisoTrabajo>;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.listaTrabajoActivo !== null){
      this.listaFiltrada = this.listaTrabajoActivo.filter(trabajo => trabajo.estado === 'activo');
    }
  }

  ngOnInit(): void {
  }

}
