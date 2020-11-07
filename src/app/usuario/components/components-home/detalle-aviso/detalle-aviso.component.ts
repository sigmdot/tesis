import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
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
        console.log(this.image);
      });
    }
  }

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  postularse(){
    console.log('Postulado Intento');
  }

  // tslint:disable-next-line: typedef
  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }


}
