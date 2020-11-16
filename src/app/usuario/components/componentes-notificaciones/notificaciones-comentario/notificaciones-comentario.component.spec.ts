import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesComentarioComponent } from './notificaciones-comentario.component';

describe('NotificacionesComentarioComponent', () => {
  let component: NotificacionesComentarioComponent;
  let fixture: ComponentFixture<NotificacionesComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
