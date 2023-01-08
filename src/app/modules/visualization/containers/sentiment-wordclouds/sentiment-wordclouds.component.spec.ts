import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentWordcloudsComponent } from './sentiment-wordclouds.component';

describe('SentimentWordcloudsComponent', () => {
  let component: SentimentWordcloudsComponent;
  let fixture: ComponentFixture<SentimentWordcloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentWordcloudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentWordcloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
