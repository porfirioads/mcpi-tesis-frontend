import { Component } from '@angular/core';
import { IMenuOption } from './shared/components/side-menu/menu-option.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mcpi-tesis-frontend';

  menuOptions: IMenuOption[] = [
    { icon: 'home', url: 'welcome', label: 'Inicio' },
    { icon: 'datasets', url: 'datasets', label: 'Datasets' },
    { icon: 'model_training', url: 'training', label: 'Entrenamiento' },
    { icon: 'start', url: 'classification', label: 'Clasificación' },
    { icon: 'analytics', url: 'visualization', label: 'Visualización' },
  ];
}
