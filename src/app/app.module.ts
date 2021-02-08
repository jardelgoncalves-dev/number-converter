import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-3401711569005699',
      adSlot: 7259870550,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
