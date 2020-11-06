import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { Trabajo } from '@core/model/trabajo.model';
import { Usuario } from '@core/model/usuario.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable } from 'rxjs';
import { MapaDetalleTrabajoConcretadoComponent } from '../mapa-detalle-trabajo-concretado/mapa-detalle-trabajo-concretado.component';

@Component({
  selector: 'app-detalle-trabajo-concretado',
  templateUrl: './detalle-trabajo-concretado.component.html',
  styleUrls: ['./detalle-trabajo-concretado.component.css']
})
export class DetalleTrabajoConcretadoComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() trabajoConcretadoAdefinir: Trabajo;
  aviso$: Observable<AvisoTrabajo>;
  usuario$: Observable<Usuario>;
  @ViewChild(MapaDetalleTrabajoConcretadoComponent) mapa: MapaDetalleTrabajoConcretadoComponent;
  constructor(private avisoSvc: AvisosTrabajosService, private UserSvc: CollecionUsuariosService) { }
  ngAfterViewChecked(): void {
    if ((this.mapa !== undefined) && (this.mapa !== null)){
      if(this.mapa.mapaTrabajoConcretado !== null){
        this.mapa.mapaTrabajoConcretado.resize();
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.table(changes.trabajoConcretadoAdefinir.currentValue);
    if ( (this.trabajoConcretadoAdefinir !== null) && (this.trabajoConcretadoAdefinir !== undefined) ){
      this.aviso$ = this.avisoSvc.getAviso(this.trabajoConcretadoAdefinir.idAvisoAsociado);
      this.usuario$ = this.UserSvc.getUsuario(this.trabajoConcretadoAdefinir.idUsuarioEmpleador);
    }
  }

  ngOnInit(): void {
  }


}
