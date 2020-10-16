import { Component, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trabajos: any[];
  constructor(private trabajoSvc$: AvisosTrabajosService) { }

  ngOnInit(): void {
     this.trabajoSvc$.getAllAvisos().subscribe(avisos => this.trabajos = avisos);
     console.log(this.trabajos);
  }

}
