import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
constructor(private http: Http) { }
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(params) {
    // call server authentication (check to see if they are logged in) 
    return this.http.post('http://localhost:3000/api/user/authenticate', { username: params.userName, password: params.password })
    .map((response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user.userName) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.isLoggedIn = true;
        }

        return user;
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}