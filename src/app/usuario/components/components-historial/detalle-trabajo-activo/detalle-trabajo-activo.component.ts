import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';

@Component({
  selector: 'app-detalle-trabajo-activo',
  templateUrl: './detalle-trabajo-activo.component.html',
  styleUrls: ['./detalle-trabajo-activo.component.css']
})
export class DetalleTrabajoActivoComponent implements OnInit, OnChanges {
  @Input() avisoAMostrar: AvisoTrabajo;
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
