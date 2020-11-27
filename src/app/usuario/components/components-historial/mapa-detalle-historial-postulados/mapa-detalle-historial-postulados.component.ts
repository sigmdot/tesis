import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-mapa-detalle-historial-postulados',
  templateUrl: './mapa-detalle-historial-postulados.component.html',
  styleUrls: ['./mapa-detalle-historial-postulados.component.css']
})
export class MapaDetalleHistorialPostuladosComponent implements OnInit, OnChanges {
  @Input() centroMapa: number[];
  mapaDetallePostulado: Mapboxgl.Map = null;
  markerWork: Mapboxgl.Marker = null;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: triple-equals
    if ((changes.centroMapa.currentValue != undefined) && (changes.centroMapa.currentValue != null)) {
      if (this.mapaDetallePostulado == null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaDetallePostulado = new Mapboxgl.Map({
          container: 'mapaHistorialBoxPostulados',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: changes.centroMapa.currentValue, // cambiar
          zoom: 18
        });
        const el = document.createElement('marker');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
        el.style.width = '20px';
        el.style.height = '40px';
        this.markerWork = new Mapboxgl.Marker(el).setLngLat(changes.centroMapa.currentValue)
          .addTo(this.mapaDetallePostulado); // cambiar
      }
      else {
        this.mapaDetallePostulado.flyTo({
          center: changes.centroMapa.currentValue,
          speed: 0.9
        });

      }
    }
  }

  ngOnInit(): void {
  }

  reAjustar() {
    if (this.mapaDetallePostulado !== null) {
      this.mapaDetallePostulado.resize();
    }
  }
}
