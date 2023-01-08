import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './modules/classification/containers/classification/classification.component';
import { CleaningComponent } from './modules/cleaning/containers/cleaning/cleaning.component';
import { TrainingComponent } from './modules/training/containers/training/training.component';
import { VisualizationComponent } from './modules/visualization/containers/visualization/visualization.component';
import { WelcomeComponent } from './modules/welcome/containers/welcome/welcome.component';
import { NotFoundComponent } from './shared/components/not-found/containers/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'datasets',
    loadChildren: () =>
      import('./modules/datasets/datasets.module').then(
        (m) => m.DatasetsModule,
      ),
  },
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
