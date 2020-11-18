import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvisoTrabajo } from '@model/aviso-trabajo.model';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { MapaHomeComponent } from '@usuario/components/components-home/mapa-home/mapa-home.component';
import {regiones} from '@core/variables/regiones';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;
  opcionesRegion = regiones;
  regionSeleccionada: any = (this.opcionesRegion[12].value) - 1;
  trabajos$: Observable<AvisoTrabajo[]> = null;
  centroMapa: number[] = this.opcionesRegion[this.regionSeleccionada].coords;
  kilometros = 0;
  usuarioPropio: string;
  @ViewChild(MapaHomeComponent) mapaDelHome: MapaHomeComponent;
  // tslint:disable-next-line: typedef
  cambio(){
    console.log('hola');
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
    console.log(this.opcionesRegion[12]);
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
  // tslint:disable-next-line: typedef
  cambiarcoords(){
    console.log(this.opcionesRegion[this.regionSeleccionada]);
    this.centroMapa = this.opcionesRegion[this.regionSeleccionada].coords;
    this.trabajos$ = this.trabajos$.pipe( map((avisosTrabajos) => {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < avisosTrabajos.length; index++) {
        avisosTrabajos[index].distancia = Math.round(this._calcularKm(avisosTrabajos[index].ubicacion));
      }
      return avisosTrabajos;
    }) );
    this.cambio();
  }
}
