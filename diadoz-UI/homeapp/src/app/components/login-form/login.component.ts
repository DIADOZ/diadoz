import { Component, AfterViewInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Router, Routes } from '@angular/router';

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.css']
})
export class LoginComponent{
    constructor(public authService: AuthService, public router: Router) {}

    submitted = false;

    model = {
        userName: '',
        password: ''
    };

    onSubmit() { 
        this.authService.login(this.model).subscribe(() => {
            if (this.authService.isLoggedIn) {
              // Get the redirect URL from our auth service
              // If no redirect has been set, use the default
              let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
       
              // Redirect the user
              this.router.navigate([redirect]);
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