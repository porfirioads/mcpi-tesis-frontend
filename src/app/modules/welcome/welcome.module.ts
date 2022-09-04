import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule],
})
export class WelcomeModule {}
