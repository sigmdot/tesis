import { TestBed } from '@angular/core/testing';

import { NotificacionesComentariosService } from './notificaciones-comentarios.service';

describe('NotificacionesComentariosService', () => {
  let service: NotificacionesComentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionesComentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
