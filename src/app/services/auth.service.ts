import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  public isLoggedIn = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: Http) { }

  public login(params) {
    // call server authentication (check to see if they are logged in)
    return this.http.post("/api/user/authenticate", { username: params.userName, password: params.password })
    .map((response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user.userName) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.isLoggedIn = true;
        }

        return user;
    });
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.http.get("/api/user/logout");
  }
}
