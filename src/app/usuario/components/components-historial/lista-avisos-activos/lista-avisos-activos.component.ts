import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';

@Component({
  selector: 'app-lista-avisos-activos',
  templateUrl: './lista-avisos-activos.component.html',
  styleUrls: ['./lista-avisos-activos.component.css']
})
export class ListaAvisosActivosComponent implements OnInit, OnChanges {
  @Input() listaAvisos: AvisoTrabajo[];
  listaAvisosFiltradaActivo: AvisoTrabajo[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.listaAvisos != null) {
      this.listaAvisosFiltradaActivo = this.listaAvisos.filter(aviso => aviso.estado === 'activo');
    }
  }

}
