import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';

@Component({
  selector: 'app-lista-postulados',
  templateUrl: './lista-postulados.component.html',
  styleUrls: ['./lista-postulados.component.css']
})
export class ListaPostuladosComponent implements OnInit, OnChanges {
  @Input() listaPostulados: string[];
  @Input() idAviso: string;
  imagen = true;

  constructor(private userColleSvc: CollecionUsuariosService, private avisoSvc: AvisosTrabajosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.listaPostulados !== undefined){
      this.imagen = false;
    }
    else{
      this.imagen = true;
    }
  }
  ngOnInit(): void {}
  
  // tslint:disable-next-line: typedef
  capturarIndicPostulado(indiceaBorrar: number){
    console.log('Se borrará el usuario', this.listaPostulados[indiceaBorrar]);
  }

}
