import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit {
  indice;
  constructor() { }
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
