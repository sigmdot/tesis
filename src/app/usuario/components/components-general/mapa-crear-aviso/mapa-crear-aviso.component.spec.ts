import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCrearAvisoComponent } from './mapa-crear-aviso.component';

describe('MapaCrearAvisoComponent', () => {
  let component: MapaCrearAvisoComponent;
  let fixture: ComponentFixture<MapaCrearAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaCrearAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaCrearAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
