import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetalleTrabajosActivoComponent } from './mapa-detalle-trabajos-activo.component';

describe('MapaDetalleTrabajosActivoComponent', () => {
  let component: MapaDetalleTrabajosActivoComponent;
  let fixture: ComponentFixture<MapaDetalleTrabajosActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDetalleTrabajosActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetalleTrabajosActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
