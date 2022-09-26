import { NgModule } from '@angular/core';
import { SideMenuComponent } from './containers/side-menu.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from '../header/header.module';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HeaderModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
