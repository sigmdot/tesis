import { Component, OnInit } from '@angular/core';
import { Usuario } from '@core/model/usuario.model';
import { ComentarioCollecionService } from '@core/service-providers/comentario-collecion/comentario-collecion.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { Comentario } from '@core/model/comentario.model';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: Usuario = null;
  correoUsuario: string;
  comentariosUsuario: Comentario[] = null;
  constructor(private authSvc: FireauthService,
              private userColleSvc: CollecionUsuariosService,
              private comentarioSvc: ComentarioCollecionService){
    const user = this.getUserFnc();
    let id: string;
    user.then((e) => {
      id = e.uid;
      /* console.log(e.uid, e.email); */
      this.userColleSvc.getUsuario(e.uid).subscribe((usuario) => {this.usuario = usuario; });
      this.comentarioSvc.getComentariosUsuario(e.uid).subscribe( (comentario) => {this.comentariosUsuario = comentario; } );
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }

}
