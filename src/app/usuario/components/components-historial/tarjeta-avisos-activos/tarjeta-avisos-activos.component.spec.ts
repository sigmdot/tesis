import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAvisosActivosComponent } from './tarjeta-avisos-activos.component';

describe('TarjetaAvisosActivosComponent', () => {
  let component: TarjetaAvisosActivosComponent;
  let fixture: ComponentFixture<TarjetaAvisosActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAvisosActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAvisosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
