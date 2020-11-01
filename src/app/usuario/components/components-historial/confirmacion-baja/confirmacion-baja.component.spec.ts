import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionBajaComponent } from './confirmacion-baja.component';

describe('ConfirmacionBajaComponent', () => {
  let component: ConfirmacionBajaComponent;
  let fixture: ComponentFixture<ConfirmacionBajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionBajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
