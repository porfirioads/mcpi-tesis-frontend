import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { SharedModule } from './shared/shared.module';
import { DatasetsModule } from './modules/datasets/datasets.module';
import { TrainingModule } from './modules/training/training.module';
import { VisualizationModule } from './modules/visualization/visualization.module';
import { ClassificationModule } from './modules/classification/classification.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CleaningModule } from './modules/cleaning/cleaning.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    NotFoundModule,
    WelcomeModule,
    DatasetsModule,
    TrainingModule,
    ClassificationModule,
    VisualizationModule,
    CleaningModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
