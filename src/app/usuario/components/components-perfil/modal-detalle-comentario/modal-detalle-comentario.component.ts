import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Comentario } from '@core/model/comentario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-detalle-comentario',
  templateUrl: './modal-detalle-comentario.component.html',
  styleUrls: ['./modal-detalle-comentario.component.css']
})
export class ModalDetalleComentarioComponent implements OnInit, OnChanges {
  @Input() comentarioDetalle: Comentario;
  aviso$: Observable<AvisoTrabajo>;
  constructor( private avisoSvc: AvisosTrabajosService ) { 

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.aviso$ = this.avisoSvc.getAviso(this.comentarioDetalle.idTrabajo);
  }

  ngOnInit(): void {
  }

}
