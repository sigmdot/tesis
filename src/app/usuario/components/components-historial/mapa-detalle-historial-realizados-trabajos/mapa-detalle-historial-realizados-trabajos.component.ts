import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-mapa-detalle-historial-realizados-trabajos',
  templateUrl: './mapa-detalle-historial-realizados-trabajos.component.html',
  styleUrls: ['./mapa-detalle-historial-realizados-trabajos.component.css']
})
export class MapaDetalleHistorialRealizadosTrabajosComponent implements OnInit, OnChanges {
  @Input() centroMapa: number[];
  mapaDetalleHistorialRealizados: Mapboxgl.Map = null;
  markerWork: Mapboxgl.Marker = null;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // tslint:disable-next-line: triple-equals
    if ((changes.centroMapa.currentValue != undefined) && (changes.centroMapa.currentValue != null)) {
      console.log('Llegue acá', changes.centroMapa.currentValue);
      if (this.mapaDetalleHistorialRealizados == null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaDetalleHistorialRealizados = new Mapboxgl.Map({
          container: 'mapaHistorialBoxRealizados',
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
          .addTo(this.mapaDetalleHistorialRealizados); // cambiar
      }
      else {
        this.mapaDetalleHistorialRealizados.flyTo({
          center: changes.centroMapa.currentValue,
          speed: 0.9
        });

      }
    }
  }

  ngOnInit(): void {
  }

  reAjustar() {
    if (this.mapaDetalleHistorialRealizados !== null) {
      this.mapaDetalleHistorialRealizados.resize();
    }
  }

}
