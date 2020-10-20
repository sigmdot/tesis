import { TestBed } from '@angular/core/testing';

import { TrabajosCollecionService } from './trabajos-collecion.service';

describe('TrabajosCollecionService', () => {
  let service: TrabajosCollecionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajosCollecionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
