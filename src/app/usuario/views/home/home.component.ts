import { Component, OnDestroy, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvisoTrabajo } from '@model/aviso-trabajo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  trabajos$: Observable<AvisoTrabajo[]> = null;
  centroMapa: number[] = [-70.689409, -33.518071];

  constructor(private trabajoSvc: AvisosTrabajosService) {
    this.trabajos$ = this.trabajoSvc.getAllAvisos();
  }


  ngOnInit(): void {
    /* this.suscripcionTrabajos = this.trabajos$.subscribe(trabajos => this.avisosLista = trabajos); */
    /* console.log(this.avisosLista); */
    this.trabajos$ = this.trabajos$.pipe( map((avisosTrabajos) => {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < avisosTrabajos.length; index++) {
        avisosTrabajos[index].distancia = this._calcularKm(avisosTrabajos[index].ubicacion);
      }
      return avisosTrabajos;
    }) );
  }

  // tslint:disable-next-line: typedef
  obtenerMiUbicacion(){
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.centroMapa = [position.coords.longitude, position.coords.latitude];
      });
      console.log(this.centroMapa);
    } else {
      alert('La geolocalización parece no estar disponible en tú navegador :(');
    }
  }

  // tslint:disable-next-line: typedef
  private _calcularKm(ubicacion: number[]): number{
    return 5;
  }
  ngOnDestroy(): void {
    /* this.suscripcionTrabajos.unsubscribe(); */
  }

}
