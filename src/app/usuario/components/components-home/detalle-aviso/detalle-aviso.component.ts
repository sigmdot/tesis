import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Postulacion} from '@core/model/postulacion.model'
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import {PostulacionesCollecionService} from '@core/service-providers/postulaciones-collecion/postulaciones-collecion.service'
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-aviso',
  templateUrl: './detalle-aviso.component.html',
  styleUrls: ['./detalle-aviso.component.css']
})
export class DetalleAvisoComponent implements OnInit, OnChanges {
  @Input() seleccionado: AvisoTrabajo;
  usuarioid: string;
  image: string;
  constructor(
    private userColle: CollecionUsuariosService,
    private avisoTrabajoSvc: AvisosTrabajosService,
    private authSvc: FireauthService,
    private postulacionSvc: PostulacionesCollecionService,
    private toastr: ToastrService
    ) {
    this.getUserFnc().then(e => {
      this.usuarioid = e.uid;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.seleccionado.currentValue !== null) && (changes.seleccionado.currentValue !== undefined) ){
      this.userColle.getUsuario(this.seleccionado.idUsuarioPosteador).subscribe(e => {
        this.image = e.foto;
      });
    }
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  postularse(){
    const postulacion: Postulacion = {
      idAviso: this.seleccionado.id,
      idUsuarioPostulado: this.usuarioid,
      estado: 'activo'
    }
    this.postulacionSvc.createPostulacion(postulacion).then(e=>
      this.toastr.success("Creada su postulación con exito!")
    );
  }

  // tslint:disable-next-line: typedef
  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }


}
