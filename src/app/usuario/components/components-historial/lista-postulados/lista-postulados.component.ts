import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Postulacion } from '@core/model/postulacion.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { PostulacionesCollecionService } from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service';

@Component({
  selector: 'app-lista-postulados',
  templateUrl: './lista-postulados.component.html',
  styleUrls: ['./lista-postulados.component.css']
})
export class ListaPostuladosComponent implements OnInit, OnChanges {
  @Input() listaPostulados: Postulacion[];
  @Input() idAviso: string;
  imagen = true;

  constructor(
    private userColleSvc: CollecionUsuariosService,
    private avisoSvc: AvisosTrabajosService,
    private postulacionSvc: PostulacionesCollecionService
    ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {}
  // tslint:disable-next-line: typedef
  capturarIndicPostulado(indiceaBorrar: number){
    console.log('Se actualizara el usuario', this.listaPostulados[indiceaBorrar].idUsuarioPostulado);
    this.postulacionSvc.actualizarPostulacion(this.listaPostulados[indiceaBorrar].id, 'finalizado');
  }

}
