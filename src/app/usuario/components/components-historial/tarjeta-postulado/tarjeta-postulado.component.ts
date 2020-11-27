import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Postulacion } from '@core/model/postulacion.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import {faCheck, faTimes, faIdBadge, faStreetView, faStar } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-tarjeta-postulado',
  templateUrl: './tarjeta-postulado.component.html',
  styleUrls: ['./tarjeta-postulado.component.css']
})
export class TarjetaPostuladoComponent implements OnInit, OnChanges {
  faCheck = faCheck;
  faTimes = faTimes;
  faIdBadge = faIdBadge;
  faStreetView = faStreetView;
  faStar = faStar;
  @Output() emisorIndicePostulado: EventEmitter<number> = new EventEmitter<number>();
  @Input() postuladoId: Postulacion;
  @Input() indice: number;
  @Input() avisoId: string;
  usuario$: Observable<Usuario>;
  usuario: string;
  constructor(
    private authSvc: FireauthService,
    private userColleSvc: CollecionUsuariosService,
    private avisoSvc: AvisosTrabajosService,
    private trabajoSvc: TrabajosCollecionService,
    private toastr: ToastrService,
    private router: Router
    ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.usuario$ = this.userColleSvc.getUsuario(this.postuladoId.idUsuarioPostulado);
  }
  // tslint:disable-next-line: typedef
  async userQuePublica(){
    const user = await this.authSvc.getUserAuth();
    return user;
  }
  ngOnInit(): void {
    this.userQuePublica().then((e) => {
      this.usuario = e.uid;
    });
  }

  // tslint:disable-next-line: typedef
  emitirIndice(){
    this.emisorIndicePostulado.emit(this.indice);
  }

  // tslint:disable-next-line: typedef
  crearTrabajoEstable(){
    const trabajAEnviar: Trabajo = {
      idAvisoAsociado : this.postuladoId.idAviso,
      idUsuarioEmpleador : this.usuario,
      idUsuarioTrabajador : this.postuladoId.idUsuarioPostulado,
      fechaInicio : new Date(),
      estado : 'activo'
    };
    this.trabajoSvc.crearTrabajo(trabajAEnviar).then(() => {
      this.avisoSvc.setEstado(this.postuladoId.idAviso, 'Finalizado');
      this.toastr.success('El trabajador fue aceptado');
      $('#modalPostulados').modal('toggle');
    });
  }

  // tslint:disable-next-line: typedef
  navegarATrabajador(){
    $('#modalPostulados').modal('toggle');
    this.router.navigate(['desktop', 'trabajador', this.postuladoId.idUsuarioPostulado]);
  }

}
