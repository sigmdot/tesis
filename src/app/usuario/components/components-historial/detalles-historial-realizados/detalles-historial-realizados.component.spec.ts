import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHistorialRealizadosComponent } from './detalles-historial-realizados.component';

describe('DetallesHistorialRealizadosComponent', () => {
  let component: DetallesHistorialRealizadosComponent;
  let fixture: ComponentFixture<DetallesHistorialRealizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesHistorialRealizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHistorialRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
