import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDatoUsuarioComponent } from './tarjeta-dato-usuario.component';

describe('TarjetaDatoUsuarioComponent', () => {
  let component: TarjetaDatoUsuarioComponent;
  let fixture: ComponentFixture<TarjetaDatoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaDatoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaDatoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
