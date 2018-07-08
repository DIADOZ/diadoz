import { DatePipe } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { DateAdapter, NativeDateAdapter } from "@angular/material";
import { Router, Routes } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { DataService } from "../../services/data.service";

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
                const userHandle = user.firstName.trim() + " " + user.lastName.trim();
                // Redirect the user
                this.router.navigate([redirect], { queryParams: { user: userHandle } });
            }
        });

        // this.submitted = true;
        // this.dataService.logIn(this.model).subscribe((model) => {
        //     console.log(model);
        //     if(model.loggedIn){
        //         this.router.navigate(['/post']);
        //     }
        // });
    }

    //TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
