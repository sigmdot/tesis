import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetalleHistorialPostuladosComponent } from './mapa-detalle-historial-postulados.component';

describe('MapaDetalleHistorialPostuladosComponent', () => {
  let component: MapaDetalleHistorialPostuladosComponent;
  let fixture: ComponentFixture<MapaDetalleHistorialPostuladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDetalleHistorialPostuladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetalleHistorialPostuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
