import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComentariosComponent } from './tarjeta-comentarios.component';

describe('TarjetaComentariosComponent', () => {
  let component: TarjetaComentariosComponent;
  let fixture: ComponentFixture<TarjetaComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
