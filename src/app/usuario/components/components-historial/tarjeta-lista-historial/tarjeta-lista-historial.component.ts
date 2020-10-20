import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
@Component({
  selector: 'app-tarjeta-lista-historial',
  templateUrl: './tarjeta-lista-historial.component.html',
  styleUrls: ['./tarjeta-lista-historial.component.css']
})
export class TarjetaListaHistorialComponent implements OnInit, OnChanges {

  @Input() aviso: any;
  @Input() tipo: string;
  @Output() emisorIndice = new EventEmitter<any>();
  @Output() tipoAvisoEmisor = new EventEmitter<any>();
  objeto = {
    nombre : null,
    foto : null,
    estado: null
  };

  constructor(private usuarioColleSvc: CollecionUsuariosService, private avisoColleSvc: AvisosTrabajosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambio tarjeta lista', changes);
  }

  ngOnInit(): void {
    // tslint:disable-next-line: triple-equals
    if (this.tipo == 'aviso'){
      this.objeto.nombre = this.aviso.nombreAviso;
      this.objeto.estado = this.aviso.estado;
      this.usuarioColleSvc.getUsuario(this.aviso.idUsuarioPosteador).subscribe(e => {
        console.log(e.foto);
        this.objeto.foto = e.foto;
      });
    }
    // tslint:disable-next-line: triple-equals
    if (this.tipo == 'trabajo'){
      this.avisoColleSvc.getAviso(this.aviso.idAvisoAsociado).subscribe(e => {
        this.objeto.nombre = e.nombreAviso;
      });
      this.objeto.estado = this.aviso.estado;
      this.usuarioColleSvc.getUsuario(this.aviso.idUsuarioEmpleador).subscribe(e => {
        this.objeto.foto = e.foto;
      });

    }
  }

  // tslint:disable-next-line: typedef
  emitirIndice(){
    this.emisorIndice.emit(this.aviso);
    this.tipoAvisoEmisor.emit(this.tipo);

  }
  // tslint:disable-next-line: typedef
  emitirTipo(){
    this.tipoAvisoEmisor.emit(this.tipo);
  }




}
