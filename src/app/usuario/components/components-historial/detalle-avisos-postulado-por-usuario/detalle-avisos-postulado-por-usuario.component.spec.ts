import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAvisosPostuladoPorUsuarioComponent } from './detalle-avisos-postulado-por-usuario.component';

describe('DetalleAvisosPostuladoPorUsuarioComponent', () => {
  let component: DetalleAvisosPostuladoPorUsuarioComponent;
  let fixture: ComponentFixture<DetalleAvisosPostuladoPorUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAvisosPostuladoPorUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAvisosPostuladoPorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
