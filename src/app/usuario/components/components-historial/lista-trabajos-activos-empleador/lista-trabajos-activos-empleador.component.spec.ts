import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajosActivosEmpleadorComponent } from './lista-trabajos-activos-empleador.component';

describe('ListaTrabajosActivosEmpleadorComponent', () => {
  let component: ListaTrabajosActivosEmpleadorComponent;
  let fixture: ComponentFixture<ListaTrabajosActivosEmpleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajosActivosEmpleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajosActivosEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
