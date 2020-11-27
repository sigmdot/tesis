import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-detalle-trabajos-activo',
  templateUrl: './mapa-detalle-trabajos-activo.component.html',
  styleUrls: ['./mapa-detalle-trabajos-activo.component.css']
})
export class MapaDetalleTrabajosActivoComponent implements OnInit, OnChanges {

  mapaDetalleAvisoTrabajoActivo: Mapboxgl.Map = null;
  markJob: Mapboxgl.Marker = null;
  @Input() ubicacionActual: number[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: triple-equals
    if ((this.ubicacionActual != undefined) && (this.ubicacionActual != null)) {
      if (this.mapaDetalleAvisoTrabajoActivo == null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaDetalleAvisoTrabajoActivo = new Mapboxgl.Map({
          container: 'mapaDetalleTrabajoActivo',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: this.ubicacionActual, // cambiar
          zoom: 18
        });
        const el = document.createElement('marker');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
        el.style.width = '20px';
        el.style.height = '40px';
        this.markJob = new Mapboxgl.Marker(el).setLngLat(this.ubicacionActual)
          .addTo(this.mapaDetalleAvisoTrabajoActivo); // cambiar
      }
      else {
        this.mapaDetalleAvisoTrabajoActivo.flyTo({
          center: this.ubicacionActual,
          speed: 0.9
        });

      }
    }
  }

  ngOnInit(): void {
  }

}
