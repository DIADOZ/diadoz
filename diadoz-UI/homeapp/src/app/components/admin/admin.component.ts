import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';

import {LoginComponent} from '../login-form/login.component';
import {PostFormComponent} from "../post-form/post-form.component";
import {MediaFormComponent} from "../media-form/media-form.component";

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  loggedIn: boolean = false;
  
  postForm(){
    // this.showMedia = false;
    // this.showPost = true;
    
  }
  mediaForm(){
    // this.showPost = false;
    // this.showMedia = true;
    
  }
    entityForm(){
    }
    //TODO: Remove this when we're done
    // get diagnostic() {
    //     return JSON.stringify();
    // }
}
