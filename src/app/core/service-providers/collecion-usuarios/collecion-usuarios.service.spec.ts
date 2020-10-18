import { TestBed } from '@angular/core/testing';

import { CollecionUsuariosService } from './collecion-usuarios.service';

describe('CollecionUsuariosService', () => {
  let service: CollecionUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollecionUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
