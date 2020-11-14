import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesBasicasComponent } from './notificaciones-basicas.component';

describe('NotificacionesBasicasComponent', () => {
  let component: NotificacionesBasicasComponent;
  let fixture: ComponentFixture<NotificacionesBasicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesBasicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
