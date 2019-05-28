import { TestBed } from '@angular/core/testing';

import { NoodleLibService } from './noodle-lib.service';

describe('NoodleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoodleLibService = TestBed.get(NoodleLibService);
    expect(service).toBeTruthy();
  });
});
