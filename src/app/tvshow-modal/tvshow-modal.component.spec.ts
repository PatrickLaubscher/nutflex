import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowModalComponent } from './tvshow-modal.component';

describe('TvshowModalComponent', () => {
  let component: TvshowModalComponent;
  let fixture: ComponentFixture<TvshowModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshowModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
