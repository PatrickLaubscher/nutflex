import { TestBed } from '@angular/core/testing';

import { ApiTvshowsService } from './api-tvshows.service';

describe('ApiTvshowsService', () => {
  let service: ApiTvshowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTvshowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
