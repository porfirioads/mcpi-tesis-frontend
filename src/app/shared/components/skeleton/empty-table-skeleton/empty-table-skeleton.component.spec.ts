import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTableSkeletonComponent } from './empty-table-skeleton.component';

describe('EmptyTableSkeletonComponent', () => {
  let component: EmptyTableSkeletonComponent;
  let fixture: ComponentFixture<EmptyTableSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyTableSkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyTableSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
