import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioDosComponent } from '@visita/components/components-registro/formulario-dos/formulario-dos.component';
import { FormularioTresComponent } from '@visita/components/components-registro/formulario-tres/formulario-tres.component';
import { FormularioUnoComponent } from '@visita/components/components-registro/formulario-uno/formulario-uno.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router) { }

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



  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  finalizarRegistro(){
    console.log('Registro finalizado usuario falso creado');
  }
  // tslint:disable-next-line: typedef
  backToLanding(){
    this.router.navigate(['/']);
  }
}
