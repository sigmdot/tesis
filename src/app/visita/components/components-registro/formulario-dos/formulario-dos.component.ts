import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-dos',
  templateUrl: './formulario-dos.component.html',
  styleUrls: ['./formulario-dos.component.css']
})
export class FormularioDosComponent implements OnInit {
  opcionesRegion =[
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

  validacionFormularioDos(){
    console.log('Validacion segundo formulario');
  }

}
