import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';

@Component({
  selector: 'app-tarjeta-historial-postulados',
  templateUrl: './tarjeta-historial-postulados.component.html',
  styleUrls: ['./tarjeta-historial-postulados.component.css']
})
export class TarjetaHistorialPostuladosComponent implements OnInit, OnChanges {
  @Input() postulacion: AvisoTrabajo;
  @Input() indice: number;
  @Output() emisorIndicePostulados: EventEmitter<number> = new EventEmitter<number>();
  foto: string;
  nombre: string;
  estado: string;

  constructor(private userCollecSvc: CollecionUsuariosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.userCollecSvc.getUsuario(this.postulacion.idUsuarioPosteador).subscribe(e=>{
      this.foto = e.foto
    });
  }

  // tslint:disable-next-line: typedef
  emitirIndiceTrabajosPostulados(){
    console.log('Emitido postulados', this.indice);
    this.emisorIndicePostulados.emit(this.indice);
  }


}
