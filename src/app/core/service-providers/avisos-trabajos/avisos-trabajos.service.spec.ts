import { TestBed } from '@angular/core/testing';

import { AvisosTrabajosService } from './avisos-trabajos.service';

describe('AvisosTrabajosService', () => {
  let service: AvisosTrabajosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisosTrabajosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
