import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detalle-aviso-historial',
  templateUrl: './detalle-aviso-historial.component.html',
  styleUrls: ['./detalle-aviso-historial.component.css']
})
export class DetalleAvisoHistorialComponent implements OnInit, OnChanges {
  @Input() avisoDetalle: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
