import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import {faIdBadge, faTimes} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-tarjeta-avisos-activos',
  templateUrl: './tarjeta-avisos-activos.component.html',
  styleUrls: ['./tarjeta-avisos-activos.component.css']
})
export class TarjetaAvisosActivosComponent implements OnInit {
  faIdBadge = faIdBadge;
  faTimes = faTimes;
  @Input() aviso: AvisoTrabajo;
  @Input() indice: number;
  @Output() emisorIndice: EventEmitter<number> = new EventEmitter<number>();
  @Output() emisorIndiceParaBorrar: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  emitirIndice(){
    this.emisorIndice.emit(this.indice);
  }

  // tslint:disable-next-line: typedef
  emitirIndiceParaBorrar(){
    this.emisorIndiceParaBorrar.emit(this.indice);
  }

}
