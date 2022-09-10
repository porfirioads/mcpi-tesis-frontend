import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './modules/classification/classification.component';
import { CleaningComponent } from './modules/cleaning/cleaning.component';
import { DatasetsComponent } from './modules/datasets/datasets.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { TrainingComponent } from './modules/training/training.component';
import { VisualizationComponent } from './modules/visualization/visualization.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'datasets', component: DatasetsComponent },
  { path: 'cleaning', component: CleaningComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'visualization', component: VisualizationComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
