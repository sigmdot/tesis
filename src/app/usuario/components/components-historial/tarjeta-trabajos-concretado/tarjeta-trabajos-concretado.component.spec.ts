import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTrabajosConcretadoComponent } from './tarjeta-trabajos-concretado.component';

describe('TarjetaTrabajosConcretadoComponent', () => {
  let component: TarjetaTrabajosConcretadoComponent;
  let fixture: ComponentFixture<TarjetaTrabajosConcretadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaTrabajosConcretadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaTrabajosConcretadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
