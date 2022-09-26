import { NgModule } from '@angular/core';
import { SideMenuComponent } from './containers/side-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from '../header/header.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    HeaderModule,
    MatIconModule,
  ],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
