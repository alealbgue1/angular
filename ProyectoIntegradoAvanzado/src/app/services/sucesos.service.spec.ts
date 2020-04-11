import { TestBed } from '@angular/core/testing';

import { SucesosService } from './sucesos.service';

describe('SucesosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SucesosService = TestBed.get(SucesosService);
    expect(service).toBeTruthy();
  });
});
