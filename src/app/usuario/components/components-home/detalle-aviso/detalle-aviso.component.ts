import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';

@Component({
  selector: 'app-detalle-aviso',
  templateUrl: './detalle-aviso.component.html',
  styleUrls: ['./detalle-aviso.component.css']
})
export class DetalleAvisoComponent implements OnInit, OnChanges {
  @Input() seleccionado: AvisoTrabajo;
  image: string;
  constructor(private userColle: CollecionUsuariosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.seleccionado.currentValue !== null) && (changes.seleccionado.currentValue !== undefined) ){
      this.userColle.getUsuario(this.seleccionado.idUsuarioPosteador).subscribe(e => {
        this.image = e.foto;
      });
    }
  }

  ngOnInit(): void {

  }


}
