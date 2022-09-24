import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './containers/app.component';
import { ClassificationModule } from './modules/classification/classification.module';
import { CleaningModule } from './modules/cleaning/cleaning.module';
import { DatasetsModule } from './modules/datasets/datasets.module';
import { TrainingModule } from './modules/training/training.module';
import { VisualizationModule } from './modules/visualization/visualization.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { NotFoundModule } from './shared/components/not-found/not-found.module';
import { SideMenuModule } from './shared/components/side-menu/side-menu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // FlexLayoutModule,
    SideMenuModule,
    // NotFoundModule,
    // WelcomeModule,
    // DatasetsModule,
    // TrainingModule,
    // ClassificationModule,
    // VisualizationModule,
    // CleaningModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
