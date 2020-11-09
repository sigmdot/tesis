import { Component, Input, OnInit } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Postulacion } from '@core/model/postulacion.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-avisos-postulados-por-usuario',
  templateUrl: './lista-avisos-postulados-por-usuario.component.html',
  styleUrls: ['./lista-avisos-postulados-por-usuario.component.css']
})
export class ListaAvisosPostuladosPorUsuarioComponent implements OnInit {
  @Input() listaAvisosPostulados: Postulacion[];
  idSeleccionada: Observable<AvisoTrabajo>;
  constructor(private avisoSvc: AvisosTrabajosService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  capturarIndicePostulado(indice: number){
    console.log('Fue capturado este indice ', indice);
    console.log('Por lo tanto este fue el aviso capturado postulado = ', this.listaAvisosPostulados[indice].idAviso);
    this.idSeleccionada = this.avisoSvc.getAviso(this.listaAvisosPostulados[indice].idAviso);
  }

}
