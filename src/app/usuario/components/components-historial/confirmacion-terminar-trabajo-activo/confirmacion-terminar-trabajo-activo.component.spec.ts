import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionTerminarTrabajoActivoComponent } from './confirmacion-terminar-trabajo-activo.component';

describe('ConfirmacionTerminarTrabajoActivoComponent', () => {
  let component: ConfirmacionTerminarTrabajoActivoComponent;
  let fixture: ComponentFixture<ConfirmacionTerminarTrabajoActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionTerminarTrabajoActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTerminarTrabajoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
