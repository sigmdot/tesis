import { Component, OnInit } from '@angular/core';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: Usuario = null;
  correoUsuario: string;
  constructor(private authSvc: FireauthService, private userColleSvc: CollecionUsuariosService){
    const user = this.getUserFnc();
    let id;
    user.then((e) =>{
      id = e.uid;
      console.log(e.uid, e.email);
      this.userColleSvc.getUsuario(e.uid).subscribe((e)=>{ console.log(e); this.usuario = e});
      console.log(this.usuario);
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
