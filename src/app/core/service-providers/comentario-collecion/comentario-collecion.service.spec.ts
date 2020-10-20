import { TestBed } from '@angular/core/testing';

import { ComentarioCollecionService } from './comentario-collecion.service';

describe('ComentarioCollecionService', () => {
  let service: ComentarioCollecionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentarioCollecionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
