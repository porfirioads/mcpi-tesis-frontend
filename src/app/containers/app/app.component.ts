import { Component } from '@angular/core';
import { IMenuOption } from '../../shared/components/side-menu/interfaces/menu-option.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mcpi-tesis-frontend';

  menuOptions: IMenuOption[] = [
    { icon: 'home', url: 'welcome', label: 'Inicio' },
    { icon: 'view_list', url: 'datasets', label: 'Datasets' },
    { icon: 'account_tree', url: 'preprocessed', label: 'Preprocesados' },
    { icon: 'model_training', url: 'classified', label: 'Clasificados' },
    { icon: 'insights', url: 'metrics', label: 'Métricas' },
    { icon: 'display_settings', url: 'visualization', label: 'Resultados' },
  ];
}
