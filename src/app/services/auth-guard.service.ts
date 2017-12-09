import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot, CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const url: string = state.url;

      return this.checkLogin(url);
    }

    public checkLogin(url: string): boolean {
      if (this.authService.isLoggedIn) { return true; }

      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;

      // Navigate to the login page with extras
      this.router.navigate(["/login"]);
      return false;
    }
}
