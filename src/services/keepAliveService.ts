import {HttpModule, Http, Response} from '@angular/http';
import {AppConfig} from "../app/app.config";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
/**
 * Created by jimbomilk on 28/12/2017.
 */

@Injectable()
export class keepAliveService {

  constructor(private http: Http, private appConfig: AppConfig) {

  }

  keepAlive(location: string): Observable<boolean> {
    return this.http.get(this.appConfig.getAPIUrl() + `keepAlive?locationId=${location}&screenId=`+this.appConfig.getConfig('ip'))
      .map( res => {
        return true;
      });
  }
}
