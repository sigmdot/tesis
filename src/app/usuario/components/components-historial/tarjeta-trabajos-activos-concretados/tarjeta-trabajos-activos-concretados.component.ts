import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-trabajos-activos-concretados',
  templateUrl: './tarjeta-trabajos-activos-concretados.component.html',
  styleUrls: ['./tarjeta-trabajos-activos-concretados.component.css']
})
export class TarjetaTrabajosActivosConcretadosComponent implements OnInit, OnChanges {
  @Input() trabajoActivo: Trabajo;
  aviso$: Observable<AvisoTrabajo>;
  trabajadoAsociado$: Observable<Usuario>;
  constructor(private avisoSvc: AvisosTrabajosService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.trabajoActivo.idAvisoAsociado, 'Acá la id del aviso');
    this.aviso$ = this.avisoSvc.getAviso(this.trabajoActivo.idAvisoAsociado);
  }
  // tslint:disable-next-line: typedef
  navegarATrabajador(){
    this.router.navigate(['desktop','trabajador',this.trabajoActivo.idUsuarioTrabajador]);
  }

  ngOnInit(): void {
  }


}
