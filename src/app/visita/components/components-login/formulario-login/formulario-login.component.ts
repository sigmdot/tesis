import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FireauthService} from '@core/services/fireauth/fireauth.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor(private authSvc: FireauthService, private router: Router) { }
  formLogin: FormGroup = new FormGroup({
    correo: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)  
  });
  ngOnInit(  ): void {
  }
  // tslint:disable-next-line: typedef
  login(){
    const email = this.formLogin.value.correo
    const pass = this.formLogin.value.pass;
    this.authSvc.loginEmailPass(email, pass).then((e)=>{
      console.log(e);
      this.router.navigateByUrl('/desktop/home');
    });
  }

}
