import { Component, Input, OnInit } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Postulacion } from '@core/model/postulacion.model';

@Component({
  selector: 'app-lista-avisos-postulados-por-usuario',
  templateUrl: './lista-avisos-postulados-por-usuario.component.html',
  styleUrls: ['./lista-avisos-postulados-por-usuario.component.css']
})
export class ListaAvisosPostuladosPorUsuarioComponent implements OnInit {
  @Input() listaAvisosPostulados: Postulacion[];
  constructor() { }

  ngOnInit(): void {
  }

}
