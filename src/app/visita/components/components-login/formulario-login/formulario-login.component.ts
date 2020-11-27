import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor(private authSvc: FireauthService, private router: Router, private toastr: ToastrService) { }
  formLogin: FormGroup = new FormGroup({
    correo: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login() {
    const email = this.formLogin.value.correo;
    const pass = this.formLogin.value.pass;
    this.authSvc.loginEmailPass(email, pass).then((e) => {
      this.router.navigateByUrl('/desktop/home');

    }).catch(e => {
      if(e.code === 'auth/invalid-email'){
        this.toastr.warning('correo inválido','Error en los datos');
      }
      else{
        this.toastr.warning('Error en los datos','Datos erroneos');
      }
      this.formLogin.reset('');
      console.clear();
    });
  }

}
