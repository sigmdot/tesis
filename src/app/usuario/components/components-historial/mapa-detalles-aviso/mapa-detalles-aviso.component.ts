import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-detalles-aviso',
  templateUrl: './mapa-detalles-aviso.component.html',
  styleUrls: ['./mapa-detalles-aviso.component.css']
})
export class MapaDetallesAvisoComponent implements OnInit, OnChanges {
  mapaDetalleHistorial: Mapboxgl.Map = null; // Mapa, se inicializa en null para cuando reciba el elemento posición pueda inicializarse
  markerWork: Mapboxgl.Marker = null; // Marcador del trabajador, este se inicializa en nulo igual por la misma razones del mapa
  @Input() centroMapaDetalle: number[]; // Input del centro para el mapa

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // tslint:disable-next-line: triple-equals
    if ((changes.centroMapaDetalle.currentValue != undefined) && (changes.centroMapaDetalle.currentValue != null)) {
      console.log('Llegue acá', changes.centroMapaDetalle.currentValue);
      if (this.mapaDetalleHistorial == null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaDetalleHistorial = new Mapboxgl.Map({
          container: 'mapaHistorialBox',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: changes.centroMapaDetalle.currentValue, // cambiar
          zoom: 18
        });
        const el = document.createElement('marker');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
        el.style.width = '20px';
        el.style.height = '40px';
        this.markerWork = new Mapboxgl.Marker(el).setLngLat(changes.centroMapaDetalle.currentValue)
          .addTo(this.mapaDetalleHistorial); // cambiar
        console.log(this.mapaDetalleHistorial);
        
      }
      else {
        this.mapaDetalleHistorial.flyTo({
          center: changes.centroMapaDetalle.currentValue,
          speed: 0.9
        });

      }
    }
  }
  // tslint:disable-next-line: typedef
  reAjustar() {
    if (this.mapaDetalleHistorial !== null) {
      this.mapaDetalleHistorial.resize();
    }
  }

}
