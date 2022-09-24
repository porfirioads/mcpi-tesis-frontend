import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CleaningComponent } from './containers/cleaning.component';

@NgModule({
  declarations: [CleaningComponent],
  imports: [CommonModule, SharedModule, MatIconModule, MatButtonModule],
})
export class CleaningModule {}
