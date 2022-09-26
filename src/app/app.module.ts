import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './containers/app.component';
import { SideMenuModule } from './shared/components/side-menu/side-menu.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SideMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
