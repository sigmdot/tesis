import { Component, Input, OnInit } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';

@Component({
  selector: 'app-tarjeta-aviso',
  templateUrl: './tarjeta-aviso.component.html',
  styleUrls: ['./tarjeta-aviso.component.css']
})
export class TarjetaAvisoComponent implements OnInit {
  @Input() aviso: AvisoTrabajo;
  constructor() { }

  ngOnInit(): void {
  }

}
