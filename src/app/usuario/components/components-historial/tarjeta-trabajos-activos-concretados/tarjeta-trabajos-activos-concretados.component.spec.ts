import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTrabajosActivosConcretadosComponent } from './tarjeta-trabajos-activos-concretados.component';

describe('TarjetaTrabajosActivosConcretadosComponent', () => {
  let component: TarjetaTrabajosActivosConcretadosComponent;
  let fixture: ComponentFixture<TarjetaTrabajosActivosConcretadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaTrabajosActivosConcretadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaTrabajosActivosConcretadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
