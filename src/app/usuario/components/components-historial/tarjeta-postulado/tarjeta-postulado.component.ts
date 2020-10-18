import { Component, OnInit } from '@angular/core';
import {faCheck, faTimes, faIdBadge, faStreetView, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-postulado',
  templateUrl: './tarjeta-postulado.component.html',
  styleUrls: ['./tarjeta-postulado.component.css']
})
export class TarjetaPostuladoComponent implements OnInit {
  faCheck = faCheck;
  faTimes = faTimes;
  faIdBadge = faIdBadge;
  faStreetView = faStreetView;
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
