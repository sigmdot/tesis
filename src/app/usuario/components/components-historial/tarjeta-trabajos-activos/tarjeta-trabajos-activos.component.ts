import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  aviso$: Observable<AvisoTrabajo>;
  constructor(private avisoSvc: AvisosTrabajosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.aviso$ = this.avisoSvc.getAviso(this.trabajoActivo.idAvisoAsociado);
  }

  ngOnInit(): void {
  }

  

}