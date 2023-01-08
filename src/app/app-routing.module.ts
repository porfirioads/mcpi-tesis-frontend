import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassifiedComponent } from './modules/classified/containers/classified/classified.component';
import { PreprocessedComponent } from './modules/preprocessed/containers/preprocessed/preprocessed.component';
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
  { path: 'preprocessed', component: PreprocessedComponent },
  { path: 'classified', component: ClassifiedComponent },
  { path: 'visualization', component: VisualizationComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
