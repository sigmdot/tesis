import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHistorialPostuladosComponent } from './detalles-historial-postulados.component';

describe('DetallesHistorialPostuladosComponent', () => {
  let component: DetallesHistorialPostuladosComponent;
  let fixture: ComponentFixture<DetallesHistorialPostuladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesHistorialPostuladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHistorialPostuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
