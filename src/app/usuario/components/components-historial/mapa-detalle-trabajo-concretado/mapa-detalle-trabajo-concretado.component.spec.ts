import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetalleTrabajoConcretadoComponent } from './mapa-detalle-trabajo-concretado.component';

describe('MapaDetalleTrabajoConcretadoComponent', () => {
  let component: MapaDetalleTrabajoConcretadoComponent;
  let fixture: ComponentFixture<MapaDetalleTrabajoConcretadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDetalleTrabajoConcretadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetalleTrabajoConcretadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
