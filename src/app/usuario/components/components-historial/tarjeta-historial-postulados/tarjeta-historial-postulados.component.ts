import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-historial-postulados',
  templateUrl: './tarjeta-historial-postulados.component.html',
  styleUrls: ['./tarjeta-historial-postulados.component.css']
})
export class TarjetaHistorialPostuladosComponent implements OnInit, OnChanges {
  @Input() postulacion: AvisoTrabajo;
  @Input() indice: number;
  @Output() emisorIndicePostulados: EventEmitter<number> = new EventEmitter<number>();
  usuarioPosteador$: Observable<Usuario>;
  
  constructor(private userCollecSvc: CollecionUsuariosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.usuarioPosteador$ = this.userCollecSvc.getUsuario(this.postulacion.idUsuarioPosteador);
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  emitirIndiceTrabajosPostulados(){
    console.log('Emitido postulados', this.indice);
    this.emisorIndicePostulados.emit(this.indice);
  }


}
