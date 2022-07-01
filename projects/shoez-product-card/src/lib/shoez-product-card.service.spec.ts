import { TestBed } from '@angular/core/testing';

import { ShoezProductCardService } from './shoez-product-card.service';

describe('ShoezProductCardService', () => {
  let service: ShoezProductCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoezProductCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
