
import { NgModule,APP_INITIALIZER  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }     from './app.component';
import { AppConfig }       from './app.config';

import { MessagesComponent } from "./messages.component";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

export function initConfig(config: AppConfig){
  return () => config.load()
}

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2GoogleChartsModule
   ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true },
    ],

  bootstrap: [AppComponent]
})
export class AppModule {}
