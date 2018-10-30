import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot, CanActivate,
  Router,
  RouterStateSnapshot,
  CanActivateChild,
  Route,
  CanLoad,
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
	constructor(private authService: AuthService, private router: Router) {}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const url: string = state.url;

		return this.checkLogin(url);
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.canActivate(route, state);
	}

	canLoad(route: Route): boolean {
		let url = `/${route.path}`;

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
