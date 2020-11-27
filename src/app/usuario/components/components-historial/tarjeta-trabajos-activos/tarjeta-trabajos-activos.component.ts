import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-trabajos-activos',
  templateUrl: './tarjeta-trabajos-activos.component.html',
  styleUrls: ['./tarjeta-trabajos-activos.component.css']
})
export class TarjetaTrabajosActivosComponent implements OnInit, OnChanges {
  @Input() trabajoActivo: Trabajo;
  @Input() indice: number;
  @Output() numeroIndiceEmisor: EventEmitter<number> = new EventEmitter<number>();
  @Output() indiceBajarActivo: EventEmitter<number> = new EventEmitter<number>();
  aviso$: Observable<AvisoTrabajo>;
  constructor(private avisoSvc: AvisosTrabajosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.aviso$ = this.avisoSvc.getAviso(this.trabajoActivo.idAvisoAsociado);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  emitirIndiceActivo(){
    this.numeroIndiceEmisor.emit(this.indice);
  }

  // tslint:disable-next-line: typedef
  emitirIndiceFinalizar(){
    this.indiceBajarActivo.emit(this.indice);
  }

}
