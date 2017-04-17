import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    private headersUrl = '';  // URL to web api
    public token: string;
    public currentUser;

    constructor(private http: Http,private config: AppConfig) {
        // set token if saved in local storage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
        this.headersUrl = config.getConfig('host');

    }

    login(user: string, pass: string): Observable<boolean> {
        return this.http.post('http://'+this.headersUrl+'/api/authenticate', {'email':user,'password':pass})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: user, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
