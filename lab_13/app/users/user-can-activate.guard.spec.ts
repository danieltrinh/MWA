import { TestBed, async, inject } from '@angular/core/testing';

import { UserCanActivateGuard } from './user-can-activate.guard';

describe('UserCanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCanActivateGuard]
    });
  });

  it('should ...', inject([UserCanActivateGuard], (guard: UserCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
