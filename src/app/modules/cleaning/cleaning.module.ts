import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CleaningComponent } from './containers/cleaning.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [CleaningComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, PageTitleModule],
})
export class CleaningModule {}
