import { Component, OnDestroy, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  trabajos$: Observable<any[]>;
  suscripcionTrabajos: Subscription;
  avisosLista: any[];
  constructor(private trabajoSvc: AvisosTrabajosService) {
    this.trabajos$ = this.trabajoSvc.getAllAvisos();
   }


  ngOnInit(): void {
    this.suscripcionTrabajos = this.trabajos$.subscribe(trabajos => this.avisosLista = trabajos);
    console.log(this.avisosLista);
  }

  ngOnDestroy(): void {
    this.suscripcionTrabajos.unsubscribe();
  }

}
