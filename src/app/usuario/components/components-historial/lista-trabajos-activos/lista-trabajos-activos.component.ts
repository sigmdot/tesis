import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-trabajos-activos',
  templateUrl: './lista-trabajos-activos.component.html',
  styleUrls: ['./lista-trabajos-activos.component.css']
})
export class ListaTrabajosActivosComponent implements OnInit, OnChanges {
  @Input() listaTrabajoActivo: Trabajo[];
  avisoTrabajoSeleccionadito$: Observable<AvisoTrabajo>;
  constructor(private avisoSvc: AvisosTrabajosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ((this.listaTrabajoActivo !== null)&&(this.listaTrabajoActivo !== undefined)){
      this.listaTrabajoActivo = this.listaTrabajoActivo.filter(aviso => aviso.estado === 'activo');
    }
  }

  ngOnInit(): void {}
  // tslint:disable-next-line: typedef
  capturarIndiceTrabajoActivo(indice: number){
    console.log(indice, this.listaTrabajoActivo[indice]);
    this.avisoTrabajoSeleccionadito$ = this.avisoSvc.getAviso(this.listaTrabajoActivo[indice].idAvisoAsociado);
  }
}
