import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetalleAvisoLaboralComponent } from './mapa-detalle-aviso-laboral.component';

describe('MapaDetalleAvisoLaboralComponent', () => {
  let component: MapaDetalleAvisoLaboralComponent;
  let fixture: ComponentFixture<MapaDetalleAvisoLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDetalleAvisoLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetalleAvisoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
