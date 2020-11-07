import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import {faCheck, faTimes, faIdBadge, faStreetView, faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-postulado',
  templateUrl: './tarjeta-postulado.component.html',
  styleUrls: ['./tarjeta-postulado.component.css']
})
export class TarjetaPostuladoComponent implements OnInit, OnChanges {
  faCheck = faCheck;
  faTimes = faTimes;
  faIdBadge = faIdBadge;
  faStreetView = faStreetView;
  faStar = faStar;
  @Output() emisorIndicePostulado: EventEmitter<number> = new EventEmitter<number>();
  @Input() postuladoId: string;
  @Input() indice: number;
  usuario$: Observable<Usuario>;
  constructor(private userColleSvc: CollecionUsuariosService, private avisoSvc:AvisosTrabajosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.usuario$ = this.userColleSvc.getUsuario(this.postuladoId);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  emitirIndice(){
    console.log(this.indice, ' Aca el postulado ');
    this.emisorIndicePostulado.emit(this.indice);
  }

}
