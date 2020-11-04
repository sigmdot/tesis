import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-trabajos-concretado',
  templateUrl: './tarjeta-trabajos-concretado.component.html',
  styleUrls: ['./tarjeta-trabajos-concretado.component.css']
})
export class TarjetaTrabajosConcretadoComponent implements OnInit, OnChanges {
  @Input() trabajoConcretado: Trabajo;
  @Input() index: number;
  avisoTrabajo$: Observable<AvisoTrabajo>;
  constructor(private avisoTrabajoSvc: AvisosTrabajosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.avisoTrabajo$ = this.avisoTrabajoSvc.getAviso(this.trabajoConcretado.idAvisoAsociado);
  }

  ngOnInit(): void {
  }


}
