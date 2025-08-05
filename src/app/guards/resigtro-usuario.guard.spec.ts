import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { resigtroUsuarioGuard } from './resigtro-usuario.guard';
import { RegistroUsarioFormComponent } from '../components/registro-usario-form/registro-usario-form.component';

describe('resigtroUsuarioGuard', () => {
  const executeGuard: CanDeactivateFn<RegistroUsarioFormComponent> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resigtroUsuarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
