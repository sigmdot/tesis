import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tarjeta-historial-realizados',
  templateUrl: './tarjeta-historial-realizados.component.html',
  styleUrls: ['./tarjeta-historial-realizados.component.css']
})
export class TarjetaHistorialRealizadosComponent implements OnInit, OnChanges {
  @Input() trabajo: Trabajo;
  @Input() indice: number;
  usuario$: Observable<Usuario>;
  aviso$: Observable<AvisoTrabajo>;

  @Output() emitirIndiceRealizado: EventEmitter<number> = new EventEmitter<number>();

  constructor(private avisoTrabajoSvc: AvisosTrabajosService, private userColleSvc: CollecionUsuariosService) {}
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ((this.trabajo !== undefined) && (this.trabajo != null)) {
      this.usuario$ = this.userColleSvc.getUsuario(this.trabajo.idUsuarioEmpleador);
      this.aviso$ = this.avisoTrabajoSvc.getAviso(this.trabajo.idAvisoAsociado);
    }
  }
  // tslint:disable-next-line: typedef
  emitirIndiceTrabajosRealizados() {
    this.emitirIndiceRealizado.emit(this.indice);
  }

}
