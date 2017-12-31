/**
 * Created by jimbomilk on 2/10/2017.
 */
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";
import * as dd from '../assets/config.production.json';


@Injectable()
export class AppConfig {
  public config: any;
  public location = 'location1';
  public ip = '';


  constructor() {
    this.config = dd;
    if (this.config.location)
      this.location = this.config.location;
    if (this.config.ip)
      this.ip = this.config.ip;
  }


  public getAPIUrl()
  {
    return "https://addmeetoo.com/api/";
  }


  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  /*public load() {
    return new Promise((resolve, reject) => {
      this.http.get('./assets/env.json').map( res => res.json() ).catch((error: any):any => {
        console.log('Configuration file "env.json" could not be read');
        resolve(true);
        return Observable.throw(error.json().error || 'Server error');
      }).subscribe( (envResponse: EnvData) => {
        this.env = envResponse;
        let request:any = null;

        switch (envResponse.env) {
          case 'production': {
            request = this.http.get('./assets/config.' + envResponse.env + '.json');
          } break;

          case 'development': {
            request = this.http.get('./assets/config.' + envResponse.env + '.json');
          } break;

          case 'default': {
            console.error('Environment file is not set or invalid');
            resolve(true);
          } break;
        }

        if (request) {
          request
            .map( res => res.json() )
            .catch((error: any) => {
              console.error('Error reading ' + envResponse.env + ' configuration file');
              resolve(error);
              return Observable.throw(error.json().error || 'Server error');
            })
            .subscribe((responseData) => {
              this.config = responseData;
              resolve(true);
            });
        } else {
          console.error('Env config file "env.json" is not valid');
          resolve(true);
        }
      });

    });
  }*/



}
