import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './containers/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from '../header/header.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, MatSidenavModule, MatListModule, HeaderModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
