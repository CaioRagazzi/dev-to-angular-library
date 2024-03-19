import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevIconModule } from '../../../dev-to-library/src/lib/dev-icon/dev-icon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DevIconModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
