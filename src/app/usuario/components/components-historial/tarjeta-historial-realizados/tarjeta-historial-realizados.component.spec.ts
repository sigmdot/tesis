import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHistorialRealizadosComponent } from './tarjeta-historial-realizados.component';

describe('TarjetaHistorialRealizadosComponent', () => {
  let component: TarjetaHistorialRealizadosComponent;
  let fixture: ComponentFixture<TarjetaHistorialRealizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaHistorialRealizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaHistorialRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
