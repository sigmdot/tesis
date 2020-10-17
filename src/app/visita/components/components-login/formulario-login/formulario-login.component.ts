import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FireauthService} from '@core/services/fireauth/fireauth.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor(private authSvc:FireauthService) { }
  formLogin: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required,]),
    pass: new FormControl('', Validators.minLength(7))  
  });
  ngOnInit(): void {
  }
  login(){
    /* this.authSvc.loginEmailPass(this.formLogin.value.email, this.formLogin.value.pass).then(e => console.log(e)); */
  }

}
