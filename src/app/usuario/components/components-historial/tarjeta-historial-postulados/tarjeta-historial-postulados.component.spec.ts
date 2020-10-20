import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHistorialPostuladosComponent } from './tarjeta-historial-postulados.component';

describe('TarjetaHistorialPostuladosComponent', () => {
  let component: TarjetaHistorialPostuladosComponent;
  let fixture: ComponentFixture<TarjetaHistorialPostuladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaHistorialPostuladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaHistorialPostuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
