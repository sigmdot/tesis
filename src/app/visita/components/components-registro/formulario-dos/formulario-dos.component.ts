import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-dos',
  templateUrl: './formulario-dos.component.html',
  styleUrls: ['./formulario-dos.component.css']
})
export class FormularioDosComponent implements OnInit {
  formDatosPersonales = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    sobreMi: new FormControl('', Validators.required)
  });
  opcionesRegion = [
    {
      value: 1,
      name: 'I - Tarapacá'
    },
    {
      value: 2,
      name: 'II - Antofagasta'
    },
    {
      value: 3,
      name: 'III - Atacama'
    },
    {
      value: 4,
      name: 'IV - Coquimbo'
    },
    {
      value: 5,
      name: 'V - Valparaíso'
    },
    {
      value: 6,
      name: 'VI - Libertador Bernardo O\'Higgins'
    },
    {
      value: 7,
      name: 'VII - Maule'
    },
    {
      value: 8,
      name: 'VIII - Concepción'
    },
    {
      value: 9,
      name: 'IX - Araucanía'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  validacionFormularioDos() {
    console.log(this.formDatosPersonales.value);
  }

}
