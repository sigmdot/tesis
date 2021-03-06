import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { FormularioDosComponent } from '@visita/components/components-registro/formulario-dos/formulario-dos.component';
import { FormularioTresComponent } from '@visita/components/components-registro/formulario-tres/formulario-tres.component';
import { FormularioUnoComponent } from '@visita/components/components-registro/formulario-uno/formulario-uno.component';
import { ToastrService } from 'ngx-toastr';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Usuario } from '@core/model/usuario.model';
import {UploaderImagerService} from '@core/services/storage/uploader-imager/uploader-imager.service'
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  toast: any;
  // tslint:disable-next-line: max-line-length
  constructor(
    private router: Router,
    private authSvc: FireauthService,
    private toastr: ToastrService,
    private userColleSvc: CollecionUsuariosService,
    private imageUploader: UploaderImagerService
  ) { }

  @ViewChild(FormularioUnoComponent) pasoUno: FormularioUnoComponent;
  @ViewChild(FormularioDosComponent) pasoDos: FormularioDosComponent;
  @ViewChild(FormularioTresComponent) pasoTres: FormularioTresComponent;

  // tslint:disable-next-line: typedef
  get FormpasoUno() {
    return this.pasoUno ? this.pasoUno.formularioRegistro : null;
  }

  // tslint:disable-next-line: typedef
  get FormpasoDos() {
    return this.pasoDos ? this.pasoDos.formDatosPersonales : null;
  }

  // tslint:disable-next-line: typedef
  get FormpasoTres() {
    return this.pasoTres ? this.pasoTres.formFoto : null;
  }

  // tslint:disable-next-line: typedef
  finalizarRegistro() {

    if (this.FormpasoTres.value.foto !== null) {
      this.authSvc.createUserEmailPass(this.FormpasoUno.value.correo, this.FormpasoUno.value.pass).then((user) => {
        const userData = (this.FormpasoDos.value) as Usuario;
        this.userColleSvc.createUsuario(userData, user.user.uid);
        this.userColleSvc.setRut(user.user.uid, this.FormpasoUno.value.rut);
        this.userColleSvc.setEmail(user.user.uid, user.user.email);
        const fileRef = this.imageUploader.fileRef(`Usuarios/${user.user.uid}`);
        const usuarios = '/Usuarios'
        this.userColleSvc.setFotoUsuario(user.user.uid, 'https://pm1.narvii.com/7070/578b809be0725cbb7cc63735cbb4155e1ed9f80ar1-775-646v2_hq.jpg'); // then dps de subir la imagen
        this.imageUploader.uploadFoto(this.FormpasoTres.value.foto,user.user.uid).then(e=>{
          firebase.storage().ref(`${usuarios}/${user.user.uid}`).getDownloadURL().then((url)=>{
            this.userColleSvc.setFotoUsuario(user.user.uid, url);
          });
        })
        this.userColleSvc.setFotoUsuario(user.user.uid,'https://pm1.narvii.com/7070/578b809be0725cbb7cc63735cbb4155e1ed9f80ar1-775-646v2_hq.jpg' ); // then dps de subir la imagen
        this.toast = this.toastr.success('Ha sido creada tú cuenta con exito', 'Cuenta creada', {
          timeOut: 5000
        });
        if (this.toast.onHidden) {
          this.router.navigate(['/home']);
        }
      }).catch(e => {
        if (e.code === 'auth/email-already-in-use') {
          this.toastr.warning('El correo ya se encuentra usado');
        }
        else{
          this.toastr.warning('Ha ocurrido un error');
        }
      });
    }
    else {
      this.toastr.warning('Se necesita de una foto');
    }
  }



  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  backToLanding() {
    this.router.navigate(['/']);
  }
}
