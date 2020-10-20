import { Component, Input, OnInit } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';

@Component({
  selector: 'app-lista-trabajos-postulados',
  templateUrl: './lista-trabajos-postulados.component.html',
  styleUrls: ['./lista-trabajos-postulados.component.css']
})
export class ListaTrabajosPostuladosComponent implements OnInit {
  @Input() listaPostulados: AvisoTrabajo[];
  postulacSellec: AvisoTrabajo;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  capturarIndiceRealizado(indice: number){
    console.log(indice, ' Capturado');
    this.postulacSellec = this.listaPostulados[indice];
    console.log(this.postulacSellec);
  }

}
