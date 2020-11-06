import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Trabajo } from '@core/model/trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';

@Component({
  selector: 'app-lista-trabajos-activos',
  templateUrl: './lista-trabajos-activos.component.html',
  styleUrls: ['./lista-trabajos-activos.component.css']
})
export class ListaTrabajosActivosComponent implements OnInit, OnChanges {
  @Input() listaTrabajoActivo: Trabajo[];
  constructor(private avisoSvc: AvisosTrabajosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ((this.listaTrabajoActivo !== null)&&(this.listaTrabajoActivo !== undefined)){
      this.listaTrabajoActivo = this.listaTrabajoActivo.filter(aviso => aviso.estado === 'activo');
    }
  }

  ngOnInit(): void {}

}
