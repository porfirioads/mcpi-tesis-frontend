import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionWordcloudsComponent } from './question-wordclouds.component';

describe('QuestionWordcloudsComponent', () => {
  let component: QuestionWordcloudsComponent;
  let fixture: ComponentFixture<QuestionWordcloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionWordcloudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionWordcloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
