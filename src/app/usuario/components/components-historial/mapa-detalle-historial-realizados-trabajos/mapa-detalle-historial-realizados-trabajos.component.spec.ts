import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetalleHistorialRealizadosTrabajosComponent } from './mapa-detalle-historial-realizados-trabajos.component';

describe('MapaDetalleHistorialRealizadosTrabajosComponent', () => {
  let component: MapaDetalleHistorialRealizadosTrabajosComponent;
  let fixture: ComponentFixture<MapaDetalleHistorialRealizadosTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDetalleHistorialRealizadosTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetalleHistorialRealizadosTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
