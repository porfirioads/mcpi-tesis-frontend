import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './containers/side-menu.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from '../header/header.module';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [SharedModule, MatSidenavModule, MatListModule, HeaderModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
