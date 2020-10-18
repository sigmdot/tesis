import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaListaHistorialComponent } from './tarjeta-lista-historial.component';

describe('TarjetaListaHistorialComponent', () => {
  let component: TarjetaListaHistorialComponent;
  let fixture: ComponentFixture<TarjetaListaHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaListaHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaListaHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
