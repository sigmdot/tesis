import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.css']
})
export class FormularioUnoComponent implements OnInit {

  formularioRegistro: FormGroup = new FormGroup({
    correo: new FormControl('', 
    [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    correoConf: new FormControl('',[
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    rut: new FormControl('', Validators.required),
    pass: new FormControl('', [Validators.minLength(7), Validators.required]),
    passConf: new FormControl('', Validators.required)
  }, {
    validators: [this.formValidator]
  });

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  validacionFormularioUno() {
    const correo = this.formularioRegistro.value.correo;
    const correoConf = this.formularioRegistro.value.correoConf;
    const rut = this.formularioRegistro.value.rut;
    const pass = this.formularioRegistro.value.pass;
    const passConf = this.formularioRegistro.value.passConf;


    if (this.formularioRegistro.invalid) {
      if (correo === '') {
        this.toastr.warning('Correo vacio');
      }
      if (correoConf === '') {
        this.toastr.warning('Debe ingresar un correo de confirmación');
      }
      if (pass === '') {
        this.toastr.warning('Debe ingresar una contraseña');
      }
      if (passConf === '') {
        this.toastr.warning('Debe confirmar su contraseña');
      }
      if (rut === '') {
        this.toastr.warning('Debe ingresar su rut');
      }
      if (correo !== correoConf) {
        this.toastr.warning('Correos diferentes');
      }
      if (pass !== passConf) {
        this.toastr.warning('Contraseñas ingresadas diferentes');
      }
      return;
    }
    if (correo !== correoConf) {
      this.toastr.warning('Correos no coinciden');
    }
    if (pass !== passConf) {
      this.toastr.warning('Contraseñas no coinciden');
    }
    if (!this.validarut(rut)) {
      this.toastr.warning('Rut inválido');
    }
  }
  // tslint:disable-next-line: typedef
  validarut(rut: string) {
    return true;
  }

  // tslint:disable-next-line: typedef
  formValidator(g: FormGroup) {
    // tslint:disable-next-line: max-line-length
    if ((g.get('pass').value != null) && (g.get('correo').value != null) && (g.get('passConf').value != null) && (g.get('correoConf').value != null)) {
      if (((g.get('pass').value) === (g.get('passConf').value)) && ((g.get('correo').value) === (g.get('correoConf').value))) {
        return null;
      }
    }
    return { datosEnNulo: true };
  }
}
