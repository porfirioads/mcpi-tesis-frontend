import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideMenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
  ],
  exports: [HeaderComponent, FooterComponent, SideMenuComponent],
})
export class SharedModule {}
