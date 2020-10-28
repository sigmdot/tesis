import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-crear-aviso',
  templateUrl: './mapa-crear-aviso.component.html',
  styleUrls: ['./mapa-crear-aviso.component.css']
})
export class MapaCrearAvisoComponent implements OnInit, OnChanges {
  mapaCreacion: Mapboxgl.Map;
  markadorDetectado: Mapboxgl.Marker;
  @Input() centroEnviado: number[];

  constructor() { }

  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapaCreacion = new Mapboxgl.Map({
          container: 'mapaCrearAviso',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-70.689409, -33.518071], // cambiar
          zoom: 18
        });
    const el = document.createElement('marker');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
    el.style.width = '20px';
    el.style.height = '40px';
    this.markadorDetectado = new Mapboxgl.Marker(el, {draggable: true}).setLngLat(this.mapaCreacion.getCenter())
          .addTo(this.mapaCreacion); // cambiar
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.centroEnviado.currentValue);
    if (
      (changes.centroEnviado.currentValue.length != 0)
      && (changes.centroEnviado.currentValue != null)
      && (changes.centroEnviado.currentValue != undefined)
      ){
        this.mapaCreacion.flyTo({
          center: this.centroEnviado
        });
        this.markadorDetectado.setLngLat(this.centroEnviado);
      }
  }
  // tslint:disable-next-line: typedef
  reajustar(){
    this.mapaCreacion.resize();
  }
  // tslint:disable-next-line: typedef
  obtenerLatLngMark(){
    return this.markadorDetectado.getLngLat();
  }
}
