import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '@core/model/usuario.model';
import { ComentarioCollecionService } from '@core/service-providers/comentario-collecion/comentario-collecion.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { Comentario } from '@core/model/comentario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario = null;
  comentariosUsuario: Comentario[] = null;
  userSubscription: Subscription;
  comentariosSubscription: Subscription;
  correoUsuario: string;
  constructor(private authSvc: FireauthService,
              private userColleSvc: CollecionUsuariosService,
              private comentarioSvc: ComentarioCollecionService){
    const user = this.getUserFnc();
    user.then((e) => {
      this.userSubscription = this.userColleSvc.getUsuario(e.uid).subscribe((usuario) => {this.usuario = usuario; console.log(usuario); });
      this.comentariosSubscription = this.comentarioSvc.getComentariosUsuario(e.uid).subscribe(
        (comentario) => {this.comentariosUsuario = comentario; console.log(comentario); }
        );
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.comentariosSubscription.unsubscribe();
    console.log('Me borre');
    
  }

  // tslint:disable-next-line: typedef
  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }

}
