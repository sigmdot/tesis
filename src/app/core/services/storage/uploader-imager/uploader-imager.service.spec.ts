import { TestBed } from '@angular/core/testing';

import { UploaderImagerService } from './uploader-imager.service';

describe('UploaderImagerService', () => {
  let service: UploaderImagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaderImagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
