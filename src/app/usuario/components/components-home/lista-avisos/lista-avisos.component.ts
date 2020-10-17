import { Component, Input, OnInit } from '@angular/core';
import { AvisoTrabajo } from '@model/aviso-trabajo.model';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.css']
})
export class ListaAvisosComponent implements OnInit {
  @Input() lista: AvisoTrabajo[];
  constructor() { }

  ngOnInit(): void {
  }

}
