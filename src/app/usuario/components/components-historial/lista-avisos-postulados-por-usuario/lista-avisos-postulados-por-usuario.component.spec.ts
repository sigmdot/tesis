import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAvisosPostuladosPorUsuarioComponent } from './lista-avisos-postulados-por-usuario.component';

describe('ListaAvisosPostuladosPorUsuarioComponent', () => {
  let component: ListaAvisosPostuladosPorUsuarioComponent;
  let fixture: ComponentFixture<ListaAvisosPostuladosPorUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAvisosPostuladosPorUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAvisosPostuladosPorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
