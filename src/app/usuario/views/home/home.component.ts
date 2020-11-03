import { Component, OnDestroy, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvisoTrabajo } from '@model/aviso-trabajo.model';
import { FireauthService } from '@core/services/fireauth/fireauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  trabajos$: Observable<AvisoTrabajo[]> = null;
  centroMapa: number[] = [-70.689409, -33.518071];
  kilometros = 0;
  usuarioPropio: string;
  // tslint:disable-next-line: typedef
  cambio(){
    if ( (this.kilometros >= 11) || (this.kilometros < 0) ){
      this.kilometros = 0;
    }
    this.trabajos$ = this.trabajos$.pipe( map((avisosTrabajos) => {
      avisosTrabajos = avisosTrabajos.filter(avisoTrabajo =>  avisoTrabajo.distancia <= this.kilometros );
      return avisosTrabajos;
    }));
  }

  constructor(private trabajoSvc: AvisosTrabajosService, private authSvc: FireauthService) {
    this.trabajos$ = this.trabajoSvc.getAvisoByStatus('activo');
    this.getUserFnc().then(e => {
      this.usuarioPropio = e.uid;
    });
  }

  // tslint:disable-next-line: typedef
  async getUserFnc(){
    const usuario = await this.authSvc.getUserAuth();
    return usuario;
  }

  ngOnInit(): void {
    /* this.suscripcionTrabajos = this.trabajos$.subscribe(trabajos => this.avisosLista = trabajos); */
    /* console.log(this.avisosLista); */
    this.trabajos$ = this.trabajos$.pipe( map((avisosTrabajos) => {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < avisosTrabajos.length; index++) {
        avisosTrabajos[index].distancia = Math.round(this._calcularKm(avisosTrabajos[index].ubicacion));
      }
      avisosTrabajos = avisosTrabajos.filter(avisoTrabajo =>
        avisoTrabajo.distancia <= this.kilometros
      );
      avisosTrabajos = avisosTrabajos.filter(avisoTrabajo =>
        avisoTrabajo.idUsuarioPosteador !== this.usuarioPropio
      );
      return avisosTrabajos;
    }) );
  }

  // tslint:disable-next-line: typedef
  obtenerMiUbicacion(){
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.centroMapa = [position.coords.longitude, position.coords.latitude];
        this.trabajos$ = this.trabajos$.pipe( map((avisosTrabajos) => {
          // tslint:disable-next-line: prefer-for-of
          for (let index = 0; index < avisosTrabajos.length; index++) {
            avisosTrabajos[index].distancia = Math.round(this._calcularKm(avisosTrabajos[index].ubicacion));
          }
          return avisosTrabajos;
        }) );
      });
    } else {
      alert('La geolocalización parece no estar disponible en tú navegador :(');
    }
  }
  // tslint:disable-next-line: typedef
  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  // tslint:disable-next-line: typedef
  private _calcularKm(ubicacion: number[]){
    const R =  6371;
    const dLat = this.deg2rad(ubicacion[1] - this.centroMapa[1]);
    const dLon = this.deg2rad(ubicacion[0] - this.centroMapa[0]);
    const a =
     Math.sin(dLat / 2) * Math.sin(dLat / 2)
     + Math.cos(this.deg2rad(this.centroMapa[1])) * Math.cos(this.deg2rad(ubicacion[1])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }
  ngOnDestroy(): void {
    /* this.suscripcionTrabajos.unsubscribe(); */
  }


}
