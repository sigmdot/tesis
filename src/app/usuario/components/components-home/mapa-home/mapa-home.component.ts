import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvisoTrabajo } from '@model/aviso-trabajo.model';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})
export class MapaHomeComponent implements OnInit, OnChanges {
  // Elementos mapa
  map: Mapboxgl.Map = null; // Mapa, se inicializa en null para cuando reciba el elemento posición pueda inicializarse
  markerWorker: Mapboxgl.Marker = null; // Marcador del trabajador, este se inicializa en nulo igual por la misma razones del mapa
  Marcadores: any[] = []; // Marcadores de avisos, se inicializa en nulo
  /* geojson = {
    'type': 'FeatureCollection',
    'features': []
  } */
  @Input() centroMapa: number[]; // Input del centro para el mapa
  @Input() avisosLista: AvisoTrabajo[]; // Lista de trabajos

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('soy el log del changes', changes);
    console.log(typeof changes.centroMapaChanges, ' typeof ');
    if ((typeof changes.centroMapa) !== 'undefined') {
      if ((changes.centroMapa.currentValue !== undefined) && (changes.centroMapa.currentValue !== null)) {
        if (this.map === null) {
          Mapboxgl.accessToken = environment.mapboxKey;
          this.map = new Mapboxgl.Map({
            container: 'mapaMapbox',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: changes.centroMapa.currentValue,
            zoom: 12.6
          });
          this.markerWorker = new Mapboxgl.Marker({
            draggable: false
          }).setLngLat(changes.centroMapa.currentValue)
            .addTo(this.map);
        }
        else {
          this.map.flyTo({
            center: changes.centroMapa.currentValue,
            speed: 0.9
          });
          this.markerWorker.setLngLat(changes.centroMapa.currentValue);
          this.Marcadores.forEach(e => {
            e.remove()
          });
          this.avisosLista.forEach(e => {
            // tslint:disable-next-line: max-line-length
            console.log(e.ubicacion, changes.centroMapa.currentValue, 'Aqui la ubicacion nueva');
            const el = document.createElement('marker');
            el.className = 'marker';
            el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
            el.style.width = '20px';
            el.style.height = '40px';
            const oneMarker = new Mapboxgl.Marker(el).setLngLat(e.ubicacion)
              .addTo(this.map);
            this.Marcadores.push(oneMarker);


          });


        }
      }
    }
    console.log(changes.avisosLista);
    if ((typeof changes.avisosLista) !== 'undefined') {
      if ((changes.avisosLista.currentValue !== undefined) && (changes.avisosLista.currentValue !== null)) {
        if (this.map) {
          console.log('LLego acá');
          this.avisosLista.forEach(e => {
            console.log(e.ubicacion, this.centroMapa);
            const el = document.createElement('marker');
            el.className = 'marker';
            el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
            el.style.backgroundSize = '100%';
            el.style.width = '20px';
            el.style.height = '40px';
            const oneMarker = new Mapboxgl.Marker(el).setLngLat(e.ubicacion).addTo(this.map);
            this.Marcadores.push(oneMarker);

          });
          console.log(this.Marcadores);

        }
      }
    }


  }

}
