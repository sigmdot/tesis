import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPostuladoComponent } from './tarjeta-postulado.component';

describe('TarjetaPostuladoComponent', () => {
  let component: TarjetaPostuladoComponent;
  let fixture: ComponentFixture<TarjetaPostuladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaPostuladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPostuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
