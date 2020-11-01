import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAvisoTrabajoActivoComponent } from './tarjeta-aviso-trabajo-activo.component';

describe('TarjetaAvisoTrabajoActivoComponent', () => {
  let component: TarjetaAvisoTrabajoActivoComponent;
  let fixture: ComponentFixture<TarjetaAvisoTrabajoActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAvisoTrabajoActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAvisoTrabajoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
