import { Component, Input, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-dar-de-baja-activo',
  templateUrl: './dar-de-baja-activo.component.html',
  styleUrls: ['./dar-de-baja-activo.component.css']
})
export class DarDeBajaActivoComponent implements OnInit {
  confirmar: boolean = false;
  @Input() idAviso: string;
  constructor(private avisosTrabajosSvc: AvisosTrabajosService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  confirmarAccion() {
    console.log(this.confirmar);
  }

  borrarAviso() {
    this.avisosTrabajosSvc.setEstado(this.idAviso, 'Finalizado').then(e => {
      $('#modalDarDeBaja').modal('hide');
      $('#modalDarDeBaja').on('hidden.bs.modal', (e) => {
        $('#modalDarDeBaja').modal('dispose');
      });
      this.toastr.success('Fue dado de baja tú aviso con exito');
    });
    this.confirmar = false;
  }

}
