import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit, OnChanges {
  @Input() lista: any;
  indice;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
  }
  capturarIndice(indice: any){
    console.log(indice);
    this.indice = indice;
  }

}
