import { TestBed } from '@angular/core/testing';

import { NotificacionesBasicasService } from './notificaciones-basicas.service';

describe('NotificacionesBasicasService', () => {
  let service: NotificacionesBasicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionesBasicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
