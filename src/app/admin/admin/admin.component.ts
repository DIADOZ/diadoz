import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from "@angular/core";
import { Router, Routes } from "@angular/router";

import { AuthService } from "../../services/auth.service";
// import {LoginComponent} from "./login-form/login.component";
// import {MediaFormComponent} from "./media-form/media-form.component";
// import {PostFormComponent} from "./post-form/post-form.component";

@Component({
    selector: "admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.css"],
})
export class AdminComponent {
  constructor(public authService: AuthService, public router: Router) {}
  public loggedIn = false;
  public postPage = true;
  public logOut() {
    this.authService.logout();
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/login"]);
    }
      // if (!this.authService.isLoggedIn) {
      //     // Get the redirect URL from our auth service
      //     // If no redirect has been set, use the default
      //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
      //     // Redirect the user
      //     this.router.navigate([redirect], { queryParams:{ user: userHandle } });
  //     // }
  // });
  }

  public activatePost() {
    this.postPage = true;
  }

  public mediaForm() {
    // this.showPost = false;
    // this.showMedia = true;

  }
    public entityForm() {
    }
    //TODO: Remove this when we're done
    // get diagnostic() {
    //     return JSON.stringify();
    // }
}
