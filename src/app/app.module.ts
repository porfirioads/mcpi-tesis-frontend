import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './containers/app/app.component';
import { SideMenuModule } from './shared/components/side-menu/side-menu.module';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { DatasetsModule } from './modules/datasets/datasets.module';
import { CleaningModule } from './modules/preprocessed/preprocessed.module';
import { ClassifiedModule } from './modules/classified/classified.module';
import { VisualizationModule } from './modules/visualization/visualization.module';
import { NotFoundModule } from './shared/components/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SideMenuModule,
    WelcomeModule,
    DatasetsModule,
    CleaningModule,
    ClassifiedModule,
    VisualizationModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
