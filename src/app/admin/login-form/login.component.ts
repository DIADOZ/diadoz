import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.css"],
})
export class LoginComponent {
    constructor(public authService: AuthService, public router: Router) {}

    public submitted = false;

    public model = {
        userName: "",
        password: "",
    };

    public onSubmit() {
        this.authService.login(this.model).subscribe((user) => {
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : "/admin";
                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }

    //TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
