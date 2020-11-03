import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';

@Component({
  selector: 'app-tarjeta-aviso',
  templateUrl: './tarjeta-aviso.component.html',
  styleUrls: ['./tarjeta-aviso.component.css']
})
export class TarjetaAvisoComponent implements OnInit {
  @Input() aviso: AvisoTrabajo;
  @Input() index: number;
  @Output() emisorIndex: EventEmitter<number> = new EventEmitter<number>();
  imagen:string;
  constructor(private userColl:CollecionUsuariosService ) { }

  ngOnInit(): void {
    this.userColl.getUsuario(this.aviso.idUsuarioPosteador).subscribe(e=>{
      console.log(e.foto);
      this.imagen = e.foto;
    });
  }

  seleccionado(){
    console.log('Fui seleccionado weh', this.index);
    this.emisorIndex.emit(this.index);
  }

}
