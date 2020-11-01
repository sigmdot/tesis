import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAvisoHistorialComponent } from './detalle-aviso-historial.component';

describe('DetalleAvisoHistorialComponent', () => {
  let component: DetalleAvisoHistorialComponent;
  let fixture: ComponentFixture<DetalleAvisoHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAvisoHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAvisoHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
