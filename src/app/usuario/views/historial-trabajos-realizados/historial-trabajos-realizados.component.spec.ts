import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTrabajosRealizadosComponent } from './historial-trabajos-realizados.component';

describe('HistorialTrabajosRealizadosComponent', () => {
  let component: HistorialTrabajosRealizadosComponent;
  let fixture: ComponentFixture<HistorialTrabajosRealizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialTrabajosRealizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialTrabajosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
