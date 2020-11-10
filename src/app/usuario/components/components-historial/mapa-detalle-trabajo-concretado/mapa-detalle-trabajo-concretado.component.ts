import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-detalle-trabajo-concretado',
  templateUrl: './mapa-detalle-trabajo-concretado.component.html',
  styleUrls: ['./mapa-detalle-trabajo-concretado.component.css']
})
export class MapaDetalleTrabajoConcretadoComponent implements OnInit, OnChanges {
  mapaTrabajoConcretado: Mapboxgl.Map = null;
  markJob: Mapboxgl.Marker = null;
  @Input() ubicacionConcretado: number[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // tslint:disable-next-line: triple-equals
    if ((this.ubicacionConcretado != undefined) && (this.ubicacionConcretado != null)) {
      console.log('Llegue ohana', this.ubicacionConcretado);
      if (this.mapaTrabajoConcretado == null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.mapaTrabajoConcretado = new Mapboxgl.Map({
          container: 'mapaConcretadoTrabajos',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: this.ubicacionConcretado, // cambiar
          zoom: 18
        });
        const el = document.createElement('marker');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://i.ibb.co/DzHgDmg/workIcon.png)';
        el.style.width = '20px';
        el.style.height = '40px';
        this.markJob = new Mapboxgl.Marker(el).setLngLat(this.ubicacionConcretado)
          .addTo(this.mapaTrabajoConcretado); // cambiar
        console.log(this.mapaTrabajoConcretado);
      }
      else {
        this.mapaTrabajoConcretado.flyTo({
          center: this.ubicacionConcretado,
          speed: 0.9
        });

      }
    }
  }

  ngOnInit(): void {
  }

}
