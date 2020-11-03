import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAvisosActivosComponent } from './lista-avisos-activos.component';

describe('ListaAvisosActivosComponent', () => {
  let component: ListaAvisosActivosComponent;
  let fixture: ComponentFixture<ListaAvisosActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAvisosActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAvisosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
