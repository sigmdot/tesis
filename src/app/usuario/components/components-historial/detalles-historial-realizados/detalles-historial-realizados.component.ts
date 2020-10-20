import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Trabajo } from '@core/model/trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';

@Component({
  selector: 'app-detalles-historial-realizados',
  templateUrl: './detalles-historial-realizados.component.html',
  styleUrls: ['./detalles-historial-realizados.component.css']
})
export class DetallesHistorialRealizadosComponent implements OnInit, OnChanges {
  @Input() trabajoDetalle: Trabajo;
  constructor(private userColleSvc: CollecionUsuariosService, private avisoCollecSvc: AvisosTrabajosService) { }
  foto: string;
  nombre: string;
  desc: string;
  ubicacion: number[];
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: triple-equals
    if ( (changes.trabajoDetalle.currentValue != undefined) && (changes.trabajoDetalle.currentValue != null) ) {
      this.userColleSvc.getUsuario(this.trabajoDetalle.idUsuarioEmpleador).subscribe(e => {
        this.foto = e.foto;
      });
      this.avisoCollecSvc.getAviso(this.trabajoDetalle.idAvisoAsociado).subscribe(e => {
        this.nombre = e.nombreAviso;
        this.desc = e.descAviso;
        this.ubicacion = e.ubicacion;
      });
    }
  }

}
