import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Postulacion } from '@core/model/postulacion.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { PostulacionesCollecionService } from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-avisos-activos',
  templateUrl: './lista-avisos-activos.component.html',
  styleUrls: ['./lista-avisos-activos.component.css']
})
export class ListaAvisosActivosComponent implements OnInit, OnChanges {
  @Input() listaAvisos: AvisoTrabajo[];
  listaAvisosFiltradaActivo: AvisoTrabajo[] = [];
  listaPostuladosSelect$: Observable<any> = null;
  idAviso: string;
  constructor(private avisoSvc: AvisosTrabajosService, private postulacionSvc: PostulacionesCollecionService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.listaAvisos != null) {
      this.listaAvisosFiltradaActivo = this.listaAvisos.filter(aviso => aviso.estado === 'activo');
    }
  }
  capturarIndice(indice: number){
    console.log(indice, ' Recepcionado padre ');
    console.log(this.listaAvisosFiltradaActivo[indice]);
    this.listaPostuladosSelect$ = this.postulacionSvc.getPostulacionesPorAviso(this.listaAvisosFiltradaActivo[indice].id);

  }

}
