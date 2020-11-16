import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajosRealizadosComponent } from './lista-trabajos-realizados.component';

describe('ListaTrabajosRealizadosComponent', () => {
  let component: ListaTrabajosRealizadosComponent;
  let fixture: ComponentFixture<ListaTrabajosRealizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajosRealizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
