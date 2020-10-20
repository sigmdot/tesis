import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Trabajo } from '@core/model/trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
@Component({
  selector: 'app-tarjeta-historial-realizados',
  templateUrl: './tarjeta-historial-realizados.component.html',
  styleUrls: ['./tarjeta-historial-realizados.component.css']
})
export class TarjetaHistorialRealizadosComponent implements OnInit, OnChanges {
  @Input() trabajo: Trabajo;
  @Input() indice: number;
  @Output() emitirIndiceRealizado: EventEmitter<number> = new EventEmitter<number>();
  nombre = 'Trabajo Nombre';
  foto = 'url jajaj.com';
  constructor(private avisoTrabajoSvc: AvisosTrabajosService, private userColleSvc: CollecionUsuariosService) {}
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'Historial realizado');
    if ((changes.trabajo.currentValue !== undefined) && (changes.trabajo.currentValue != null)) {
      console.log(changes.trabajo.currentValue);
      this.userColleSvc.getUsuario(this.trabajo.idUsuarioEmpleador).subscribe((e) => {
        this.foto = e.foto;
      });
      this.avisoTrabajoSvc.getAviso(this.trabajo.idAvisoAsociado).subscribe((e) => {
        this.nombre = e.nombreAviso;
      });
    }
  }
  // tslint:disable-next-line: typedef
  emitirIndiceTrabajosRealizados() {
    console.log('se emite', this.indice);
    this.emitirIndiceRealizado.emit(this.indice);
  }

}
