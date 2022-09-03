import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, WelcomeModule, NotFoundModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
