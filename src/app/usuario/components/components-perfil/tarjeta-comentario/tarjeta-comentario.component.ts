import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Comentario } from '@core/model/comentario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { faSignLanguage, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.css']
})
export class TarjetaComentarioComponent implements OnInit, OnChanges {
  iconComentario;
  nombreTrabajo;
  aviso$: Observable<AvisoTrabajo>;
  @Output() emisorIndice: EventEmitter<number> = new EventEmitter<number>();
  @Input() comentario: Comentario;
  @Input() indice: number;

  constructor(private avisoTrabajoSvc: AvisosTrabajosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.aviso$= this.avisoTrabajoSvc.getAviso(this.comentario.idTrabajo)
  }
  // tslint:disable-next-line: typedef
  emitirIndice(){
    this.emisorIndice.emit(this.indice);
  }
  ngOnInit(): void {
    if (this.comentario.nota > 3){
       this.iconComentario = faThumbsUp;
    }
    if (this.comentario.nota < 3){
      this.iconComentario = faThumbsDown;
    }
    // tslint:disable-next-line: triple-equals
    if (this.comentario.nota == 3){
      this.iconComentario = faSignLanguage;
    }
    this.nombreTrabajo = 'nombre trabajo cool';
  }

}
