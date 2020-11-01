import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
@Component({
  selector: 'app-tarjeta-lista-historial',
  templateUrl: './tarjeta-lista-historial.component.html',
  styleUrls: ['./tarjeta-lista-historial.component.css']
})
export class TarjetaListaHistorialComponent implements OnInit, OnChanges {

  @Input() aviso: AvisoTrabajo;
  @Input() indice: number;
  @Output() indiceEmisor: EventEmitter<number> = new EventEmitter<number>();

  detalles = {
    nombre: null,
    foto: null,
    estado: null
  }

  constructor(private usuarioColleSvc: CollecionUsuariosService, private avisoColleSvc: AvisosTrabajosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambio tarjeta lista', changes);
  }

  ngOnInit(): void {
    this.detalles.nombre = this.aviso.nombreAviso;
    this.usuarioColleSvc.getUsuario(this.aviso.idUsuarioPosteador).subscribe(e => {
      this.detalles.foto = e.foto;
    });
    this.detalles.estado = this.aviso.estado;
  }

  // tslint:disable-next-line: typedef
  emitirIndice(){
    this.indiceEmisor.emit(this.indice);
  }

}
