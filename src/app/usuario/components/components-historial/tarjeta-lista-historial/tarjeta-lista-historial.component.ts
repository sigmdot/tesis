import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '@core/model/usuario.model';

@Component({
  selector: 'app-tarjeta-lista-historial',
  templateUrl: './tarjeta-lista-historial.component.html',
  styleUrls: ['./tarjeta-lista-historial.component.css']
})
export class TarjetaListaHistorialComponent implements OnInit, OnChanges {

  @Input() aviso: AvisoTrabajo;
  @Input() indice: number;
  @Output() indiceEmisor: EventEmitter<number> = new EventEmitter<number>();
  usuario$: Observable<Usuario> = null;

  constructor(private usuarioColleSvc: CollecionUsuariosService) {   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if ((changes.aviso.currentValue !== null) && (changes.aviso.currentValue !== undefined)){
      this.usuario$ = this.usuarioColleSvc.getUsuario(this.aviso.idUsuarioPosteador);
    }
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  emitirIndice(){
    this.indiceEmisor.emit(this.indice);
  }

}
