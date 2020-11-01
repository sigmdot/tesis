import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleComentarioComponent } from './modal-detalle-comentario.component';

describe('ModalDetalleComentarioComponent', () => {
  let component: ModalDetalleComentarioComponent;
  let fixture: ComponentFixture<ModalDetalleComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalleComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalleComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
