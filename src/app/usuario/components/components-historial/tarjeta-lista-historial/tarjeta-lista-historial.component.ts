import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tarjeta-lista-historial',
  templateUrl: './tarjeta-lista-historial.component.html',
  styleUrls: ['./tarjeta-lista-historial.component.css']
})
export class TarjetaListaHistorialComponent implements OnInit,OnChanges {

  @Input() aviso: any;
  @Output() emisorIndice = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  emitirIndice(){
    this.emisorIndice.emit(this.aviso);
  }

  

}
