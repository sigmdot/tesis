import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-detalle-aviso-laboral',
  templateUrl: './mapa-detalle-aviso-laboral.component.html',
  styleUrls: ['./mapa-detalle-aviso-laboral.component.css']
})
export class MapaDetalleAvisoLaboralComponent implements OnInit, OnChanges {
  @Input() ubicacion: number[];
  mapaLaboral: Mapboxgl.Map = null;
  markadorUbicacionLaboral: Mapboxgl.Marker = null;
  constructor() { }
  reAjustar() {
    if (this.mapaLaboral !== null) {
      this.mapaLaboral.resize();
    }
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.ubicacion.currentValue != undefined) && (changes.ubicacion.currentValue != null)) {
      console.log('Llegue acá', changes.ubicacion.currentValue);
      if (this.mapaLaboral == null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaLaboral = new Mapboxgl.Map({
          container: 'mapaDetalleAvisoLaboral',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: this.ubicacion, // cambiar
          zoom: 18
        });
        const el = document.createElement('marker');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
        el.style.width = '20px';
        el.style.height = '40px';
        this.markadorUbicacionLaboral = new Mapboxgl.Marker(el).setLngLat(this.ubicacion)
          .addTo(this.mapaLaboral); // cambiar
      }
      else {
        this.mapaLaboral.flyTo({
          center: this.ubicacion,
          speed: 0.9
        });
        this.markadorUbicacionLaboral.setLngLat(this.ubicacion);
      }
    }
  }




}
