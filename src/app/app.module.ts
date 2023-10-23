import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifsService } from './gifs/services/gifs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GifsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
