import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-mapa-detalle-historial-realizados-trabajos',
  templateUrl: './mapa-detalle-historial-realizados-trabajos.component.html',
  styleUrls: ['./mapa-detalle-historial-realizados-trabajos.component.css']
})
export class MapaDetalleHistorialRealizadosTrabajosComponent implements OnInit, OnChanges {
  @Input() mapaCenter: number[];
  mapaDetalleHistorialRealizados: Mapboxgl.Map = null;
  markerWork: Mapboxgl.Marker = null;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: triple-equals
    if ((changes.mapaCenter.currentValue != undefined) && (changes.mapaCenter.currentValue != null)) {
      if (this.mapaDetalleHistorialRealizados === null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaDetalleHistorialRealizados = new Mapboxgl.Map({
          container: 'mapaHistorialBoxRealizados',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: this.mapaCenter,
          zoom: 18
        });
        const el = document.createElement('marker');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
        el.style.width = '20px';
        el.style.height = '40px';
        this.markerWork = new Mapboxgl.Marker(el).setLngLat(this.mapaCenter)
          .addTo(this.mapaDetalleHistorialRealizados); // cambiar
      }
      else {
        this.mapaDetalleHistorialRealizados.flyTo({
          center: this.mapaCenter,
          speed: 1.5
        });
        this.markerWork.setLngLat(this.mapaCenter);

      }
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  reAjustar() {
    if (this.mapaDetalleHistorialRealizados !== null) {
      this.mapaDetalleHistorialRealizados.resize();
    }
  }

}
