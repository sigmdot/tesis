import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajosActivosComponent } from './lista-trabajos-activos.component';

describe('ListaTrabajosActivosComponent', () => {
  let component: ListaTrabajosActivosComponent;
  let fixture: ComponentFixture<ListaTrabajosActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajosActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
