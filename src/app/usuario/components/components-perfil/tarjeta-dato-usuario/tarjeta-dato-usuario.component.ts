import { Component, OnInit } from '@angular/core';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tarjeta-dato-usuario',
  templateUrl: './tarjeta-dato-usuario.component.html',
  styleUrls: ['./tarjeta-dato-usuario.component.css']
})
export class TarjetaDatoUsuarioComponent implements OnInit {
  faStreetView = faStreetView;
  constructor() { }

  ngOnInit(): void {
  }

}
