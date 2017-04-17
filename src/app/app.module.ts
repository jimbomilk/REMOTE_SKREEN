import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }     from './app.component';
import { PageService }    from './services/page.service';
import { AppConfig }       from './app.config';

import { AuthenticationService } from './services/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    NgbModule.forRoot(),
    Ng2GoogleChartsModule,
   ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true },
    AuthenticationService,
    PageService,
    ],

  bootstrap: [AppComponent]
})
export class AppModule {}
