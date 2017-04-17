/**
 * Created by jimbomilk on 2/7/2017.
 */
import { Injectable }    from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Screen } from '../screen';
import { AppConfig } from '../app.config';
import { AuthenticationService } from '../services/index';

@Injectable()
export class PageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private headersUrl = '';  // URL to web api
  private location = '';  // URL to web api
  private screen = '';  // URL to web api


  constructor(private http: Http,private config: AppConfig,private authenticationService: AuthenticationService) {
    this.headersUrl = config.getConfig('host');
    this.location = config.getConfig('location');
    this.screen = config.getConfig('screen');
  }

  /* Return the views to show in a screen of a loaction */

  getViews(): Promise<Array<Screen>> {

    const url = `http://${this.headersUrl}/api/screens/${this.location}/${this.screen}`;

    return this.http.post(url,{'token':this.authenticationService.token})
      .toPromise()
      .then(response => response.json() as Array<Screen>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
