import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajosConcretadosComponent } from './lista-trabajos-concretados.component';

describe('ListaTrabajosConcretadosComponent', () => {
  let component: ListaTrabajosConcretadosComponent;
  let fixture: ComponentFixture<ListaTrabajosConcretadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajosConcretadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajosConcretadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
