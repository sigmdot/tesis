import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';

@Component({
  selector: 'app-lista-avisos-activos',
  templateUrl: './lista-avisos-activos.component.html',
  styleUrls: ['./lista-avisos-activos.component.css']
})
export class ListaAvisosActivosComponent implements OnInit, OnChanges {
  @Input() listaAvisos: AvisoTrabajo[];
  listaAvisosFiltradaActivo: AvisoTrabajo[] = [];
  listaPostuladosSelect: string[] = null;
  idAviso: string;
  constructor(private avisoSvc: AvisosTrabajosService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.listaAvisos != null) {
      this.listaAvisosFiltradaActivo = this.listaAvisos.filter(aviso => aviso.estado === 'activo');
    }
  }
  capturarIndice(indice: number){
    console.log(indice, ' Recepcionado padre ');
    this.listaPostuladosSelect = this.listaAvisosFiltradaActivo[indice].usuariosPostulados;
    console.log(this.listaPostuladosSelect);
    this.idAviso = this.listaAvisosFiltradaActivo[indice].id;

  }

}
