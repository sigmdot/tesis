import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrabajoActivoComponent } from './detalle-trabajo-activo.component';

describe('DetalleTrabajoActivoComponent', () => {
  let component: DetalleTrabajoActivoComponent;
  let fixture: ComponentFixture<DetalleTrabajoActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTrabajoActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTrabajoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
