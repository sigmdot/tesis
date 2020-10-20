import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit, OnChanges {
  @Input() lista: any;
  @Input() tipo: string;
  avisoTrasmitido;
  tipoAvisoTrasmitido;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  capturarAviso(aviso: any){
    this.avisoTrasmitido = aviso;
  }

  // tslint:disable-next-line: typedef
  capturarTipo(tipo: string){
    this.tipoAvisoTrasmitido = tipo;
  }

}
