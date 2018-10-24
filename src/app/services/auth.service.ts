import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";
import { delay, tap } from "rxjs/operators";

@Injectable()
export class AuthService {
  public isLoggedIn = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(obj) {
    // call server authentication (check to see if they are logged in)
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
    // return this.http.post("/api/user/authenticate", { username: params.userName, password: params.password })
    // .map((response) => {
    //     // login successful if there's a jwt token in the response
    //     const user = response.;
    //     if (user.userName) {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem("currentUser", JSON.stringify(user));
    //         this.isLoggedIn = true;
    //     }
    
    //     return user;
    // });
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.http.get("/api/user/logout");
  }
}
