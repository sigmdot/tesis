import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotiBasica } from '@core/model/notifi-basica.model';
import { Postulacion } from '@core/model/postulacion.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { NotificacionesBasicasService } from '@core/service-providers/notificaciones-basicas/notificaciones-basicas.service';
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
    private noti: NotificacionesBasicasService,
    private postulacionSvc: PostulacionesCollecionService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if ((this.listaPostulados !== null) && (this.listaPostulados !== undefined)) {
      this.listaPostulados = this.listaPostulados.filter(postulacion => postulacion.estado.toUpperCase() === 'ACTIVO');
    }
  }
  ngOnInit(): void { }
  // tslint:disable-next-line: typedef
  capturarIndicPostulado(indiceaBorrar: number) {
    const notiBasica: NotiBasica = {
      idAvisoAsoc: this.listaPostulados[indiceaBorrar].idAviso,
      idUsuarioRecibir: this.listaPostulados[indiceaBorrar].idUsuarioPostulado,
      mensaje: 'Desafortunadamente fuiste rechazado en un trabajo, vamos para la otra!'
    }
    this.postulacionSvc.actualizarPostulacion(this.listaPostulados[indiceaBorrar].id, 'finalizado').then(e=>{
      this.noti.crearNoti(notiBasica);
    });
  }

}
