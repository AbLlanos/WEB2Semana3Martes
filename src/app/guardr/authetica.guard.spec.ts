import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autheticaGuard } from './authetica.guard';

describe('autheticaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autheticaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
