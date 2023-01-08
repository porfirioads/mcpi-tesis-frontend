import { NgModule } from '@angular/core';
import { VisualizationComponent } from './containers/visualization/visualization.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { OverviewComponent } from './containers/overview/overview.component';
import { QuestionsComponent } from './containers/questions/questions.component';
import { SentimentWordcloudsComponent } from './containers/sentiment-wordclouds/sentiment-wordclouds.component';
import { QuestionWordcloudsComponent } from './containers/question-wordclouds/question-wordclouds.component';
@NgModule({
  declarations: [VisualizationComponent, OverviewComponent, QuestionsComponent, SentimentWordcloudsComponent, QuestionWordcloudsComponent],
  imports: [SharedModule, PageTitleModule],
})
export class VisualizationModule {}
