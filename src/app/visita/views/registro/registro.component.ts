import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { FormularioDosComponent } from '@visita/components/components-registro/formulario-dos/formulario-dos.component';
import { FormularioTresComponent } from '@visita/components/components-registro/formulario-tres/formulario-tres.component';
import { FormularioUnoComponent } from '@visita/components/components-registro/formulario-uno/formulario-uno.component';
import { ToastrService } from 'ngx-toastr';
import {CollecionUsuariosService} from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Usuario } from '@core/model/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  toast: any;
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private authSvc: FireauthService, private toastr: ToastrService, private userColleSvc: CollecionUsuariosService) { }

  @ViewChild(FormularioUnoComponent) pasoUno: FormularioUnoComponent;
  @ViewChild(FormularioDosComponent) pasoDos: FormularioDosComponent;
  @ViewChild(FormularioTresComponent) pasoTres: FormularioTresComponent;

  // tslint:disable-next-line: typedef
  get FormpasoUno() {
    return this.pasoUno ? this.pasoUno.formularioRegistro : null;
  }

  // tslint:disable-next-line: typedef
  get FormpasoDos(){
    return this.pasoDos ? this.pasoDos.formDatosPersonales : null;
  }

  // tslint:disable-next-line: typedef
  get FormpasoTres(){
    return this.pasoTres ? this.pasoTres.formFoto : null;
  }

  // tslint:disable-next-line: typedef
  finalizarRegistro() {
    console.log('Form uno');
    console.log(this.FormpasoUno);
    console.log('Form dos');
    console.log(this.FormpasoDos);
    console.log('Form tres');
    console.log(this.FormpasoTres);
    if (this.FormpasoTres.value.file !== null) {
      this.authSvc.createUserEmailPass(this.FormpasoUno.value.correo, this.FormpasoUno.value.pass).then((user) => {
        console.log(user);
        console.log(user.user.uid);
        const userData = (this.FormpasoDos.value) as Usuario;
        this.userColleSvc.createUsuario(userData, user.user.uid);
        this.userColleSvc.setFotoUsuario(user.user.uid, 'https://pm1.narvii.com/7070/578b809be0725cbb7cc63735cbb4155e1ed9f80ar1-775-646v2_hq.jpg');
        this.toast = this.toastr.success('Ha sido creada tú cuenta con exito', 'Cuenta creada', {
          timeOut: 5000
        });
        if (this.toast.onHidden){
          this.router.navigate(['/home']);
        }
      }).catch(e => {
        console.log('ERROR', e);
      });
    }
    else {
      this.toastr.warning('Se necesita de una foto');
    }
  }



  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  backToLanding(){
    this.router.navigate(['/']);
  }
}
