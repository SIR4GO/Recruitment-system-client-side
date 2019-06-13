import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastJobsComponent } from './last-jobs.component';

describe('LastJobsComponent', () => {
  let component: LastJobsComponent;
  let fixture: ComponentFixture<LastJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
