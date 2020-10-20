import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajosPostuladosComponent } from './lista-trabajos-postulados.component';

describe('ListaTrabajosPostuladosComponent', () => {
  let component: ListaTrabajosPostuladosComponent;
  let fixture: ComponentFixture<ListaTrabajosPostuladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajosPostuladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajosPostuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
