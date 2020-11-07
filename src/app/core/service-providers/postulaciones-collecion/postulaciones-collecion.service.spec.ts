import { TestBed } from '@angular/core/testing';

import { PostulacionesCollecionService } from './postulaciones-collecion.service';

describe('PostulacionesCollecionService', () => {
  let service: PostulacionesCollecionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulacionesCollecionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
