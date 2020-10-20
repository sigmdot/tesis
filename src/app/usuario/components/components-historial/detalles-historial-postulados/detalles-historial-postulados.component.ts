import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';

@Component({
  selector: 'app-detalles-historial-postulados',
  templateUrl: './detalles-historial-postulados.component.html',
  styleUrls: ['./detalles-historial-postulados.component.css']
})
export class DetallesHistorialPostuladosComponent implements OnInit, OnChanges {
  @Input() postulado: AvisoTrabajo;
  nombre: string;
  desc: string;
  ubicacion: number[];
  foto: string;
  constructor(private userCollecSvc: CollecionUsuariosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.postulado);
    if ( (changes.postulado.currentValue) && (changes.postulado.currentValue != null) ){
      this.nombre = this.postulado.nombreAviso;
      this.desc = this.postulado.descAviso;
      this.ubicacion = this.postulado.ubicacion;
      this.userCollecSvc.getUsuario(this.postulado.idUsuarioPosteador).subscribe(e=>{
        this.foto = e.foto;
      });
    }
  }

  ngOnInit(): void {
  }



}
