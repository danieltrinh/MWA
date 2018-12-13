import { TestBed, async, inject } from '@angular/core/testing';

import { UserCanDeactivateGuard } from './user-can-deactivate.guard';

describe('UserCanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCanDeactivateGuard]
    });
  });

  it('should ...', inject([UserCanDeactivateGuard], (guard: UserCanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
