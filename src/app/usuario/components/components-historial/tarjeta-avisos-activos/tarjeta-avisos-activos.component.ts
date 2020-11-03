import { Component, Input, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
