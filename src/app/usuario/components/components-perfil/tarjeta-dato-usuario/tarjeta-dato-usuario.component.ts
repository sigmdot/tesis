import { Component, Input, OnInit } from '@angular/core';
import { faStreetView, faPhone, faMailBulk, faIdCard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tarjeta-dato-usuario',
  templateUrl: './tarjeta-dato-usuario.component.html',
  styleUrls: ['./tarjeta-dato-usuario.component.css']
})
export class TarjetaDatoUsuarioComponent implements OnInit {
  faStreetView = faStreetView;
  icon = null;
  @Input() tipo: string;
  @Input() dato: any;
  constructor() { 
    
  }

  ngOnInit(): void {
    if (this.tipo === 'region'){
      this.icon = faStreetView;
    }
    if (this.tipo === 'telefono'){
      this.icon = faPhone;
    }
    if (this.tipo === 'correo'){
      this.icon = faMailBulk;
    }
    if (this.tipo === 'rut'){
      this.icon = faIdCard;
    }
  }

}
