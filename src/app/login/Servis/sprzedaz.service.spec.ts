import { TestBed } from '@angular/core/testing';

import { SprzedazService } from './sprzedaz.service';

describe('SprzedazService', () => {
  let service: SprzedazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprzedazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
