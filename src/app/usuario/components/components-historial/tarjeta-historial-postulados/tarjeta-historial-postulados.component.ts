import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Postulacion } from '@core/model/postulacion.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-historial-postulados',
  templateUrl: './tarjeta-historial-postulados.component.html',
  styleUrls: ['./tarjeta-historial-postulados.component.css']
})
export class TarjetaHistorialPostuladosComponent implements OnInit, OnChanges {
  @Input() postulacion: Postulacion;
  @Input() indice: number;
  @Output() emisorIndicePostulados: EventEmitter<number> = new EventEmitter<number>();
  aviso$: Observable<AvisoTrabajo>;
  user$: Observable<Usuario>;
  
  constructor(private userCollecSvc: CollecionUsuariosService, private avisoTrabajoSvc: AvisosTrabajosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.aviso$ = this.avisoTrabajoSvc.getAviso(this.postulacion.idAviso);
    this.user$ = this.userCollecSvc.getUsuario(this.postulacion.idUsuarioPostulado);
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  emitirIndiceTrabajosPostulados(){
    this.emisorIndicePostulados.emit(this.indice);
  }


}
