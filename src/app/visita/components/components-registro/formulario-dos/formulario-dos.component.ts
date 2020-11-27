import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {regiones} from '@core/variables/regiones';
@Component({
  selector: 'app-formulario-dos',
  templateUrl: './formulario-dos.component.html',
  styleUrls: ['./formulario-dos.component.css']
})
export class FormularioDosComponent implements OnInit {
  formDatosPersonales = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    sobreMi: new FormControl('', Validators.required)
  });
  opcionesRegion = regiones;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  validacionFormularioDos() {
  }

}
