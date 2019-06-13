import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseLastJobComponent } from './browse-last-job.component';

describe('BrowseLastJobComponent', () => {
  let component: BrowseLastJobComponent;
  let fixture: ComponentFixture<BrowseLastJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseLastJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseLastJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
