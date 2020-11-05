import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjeta-trabajos-concretado',
  templateUrl: './tarjeta-trabajos-concretado.component.html',
  styleUrls: ['./tarjeta-trabajos-concretado.component.css']
})
export class TarjetaTrabajosConcretadoComponent implements OnInit, OnChanges {
  @Input() trabajoConcretado: Trabajo;
  @Input() index: number;
  avisoTrabajo$: Observable<AvisoTrabajo>;
  usuario$: Observable<Usuario>;
  constructor(private avisoTrabajoSvc: AvisosTrabajosService, private usuarioSvc: CollecionUsuariosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.avisoTrabajo$ = this.avisoTrabajoSvc.getAviso(this.trabajoConcretado.idAvisoAsociado);
    this.usuario$ = this.usuarioSvc.getUsuario(this.trabajoConcretado.idUsuarioEmpleador);
  }

  ngOnInit(): void {
  }


}
