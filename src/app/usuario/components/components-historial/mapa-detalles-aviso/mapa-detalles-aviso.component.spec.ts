import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetallesAvisoComponent } from './mapa-detalles-aviso.component';

describe('MapaDetallesAvisoComponent', () => {
  let component: MapaDetallesAvisoComponent;
  let fixture: ComponentFixture<MapaDetallesAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDetallesAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetallesAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
