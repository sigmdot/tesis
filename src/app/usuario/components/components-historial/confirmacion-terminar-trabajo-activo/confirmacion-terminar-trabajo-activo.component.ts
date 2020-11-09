import { Component, Input, OnInit } from '@angular/core';
import { TrabajosCollecionService } from '@core/service-providers/trabajos-collecion/trabajos-collecion.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-confirmacion-terminar-trabajo-activo',
  templateUrl: './confirmacion-terminar-trabajo-activo.component.html',
  styleUrls: ['./confirmacion-terminar-trabajo-activo.component.css']
})
export class ConfirmacionTerminarTrabajoActivoComponent implements OnInit {
  confirmarAccion = false;
  @Input() idTrabajo: string;
  constructor(private trabajoSvc: TrabajosCollecionService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  confirmarAccionBajaActivo(){
    console.log('seguro? = ', this.confirmarAccion);
  }
  // tslint:disable-next-line: typedef
  terminarTrabajo(){
    const date = new Date();
    console.log('Este trabajo WAH a terminar', this.idTrabajo);
    this.trabajoSvc.actualizarEstadoTrabajo(this.idTrabajo, 'Finalizado');
    this.trabajoSvc.finalizarFecha(this.idTrabajo, date).then(e=>{
      $('#modalTerminarTrabajo').modal('toggle');
      this.toastr.success('Borrado con exito');
    }
    );
    
  }
}
