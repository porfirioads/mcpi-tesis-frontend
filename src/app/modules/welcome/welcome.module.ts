import { NgModule } from '@angular/core';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [SharedModule],
})
export class WelcomeModule {}
