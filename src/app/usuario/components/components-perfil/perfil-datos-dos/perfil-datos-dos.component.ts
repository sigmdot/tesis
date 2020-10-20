import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-datos-dos',
  templateUrl: './perfil-datos-dos.component.html',
  styleUrls: ['./perfil-datos-dos.component.css']
})
export class PerfilDatosDosComponent implements OnInit {
  @Input() info: string;
  constructor() { }

  ngOnInit(): void {
  }

}
