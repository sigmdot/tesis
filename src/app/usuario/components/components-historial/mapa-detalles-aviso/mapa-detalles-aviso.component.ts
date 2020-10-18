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
  markerWorker: Mapboxgl.Marker = null; // Marcador del trabajador, este se inicializa en nulo igual por la misma razones del mapa
  @Input() centroMapaDetalle: number[]; // Input del centro para el mapa

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if( (changes.centroMapaDetalle.currentValue !== undefined) && (changes.centroMapaDetalle.currentValue !== null)){
      console.log('Llegue acá', changes.centroMapaDetalle.currentValue);
      if (this.mapaDetalleHistorial == null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaDetalleHistorial = new Mapboxgl.Map({
          container: 'mapaHistorialBox',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-71.599994, -33.049800], // cambiar
          zoom: 12.6
        });
      }
      else {
        this.mapaDetalleHistorial.flyTo({
          center: [-71.599994, -33.049800],
          speed: 0.9
        });

      }
    }
  }
  reAjustar(){
    if(this.mapaDetalleHistorial !== null){
      this.mapaDetalleHistorial.resize();
    }
  }

}
