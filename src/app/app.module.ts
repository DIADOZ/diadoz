import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


import { Angulartics2Module } from "angulartics2";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import { Md2Module } from 'angular-md2';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JoditAngularModule } from 'jodit-angular';

import { AuthGuard } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { DataService } from "./services/data.service";

import { EscapeHtmlPipe } from "./pipes/keep-html.pipe";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/404-page/not-found.component";
import { MousewheelComponent } from "./components/mousewheel/mousewheel.component";

import { AdminModule } from "./admin/admin.module";
import { PostFormComponent } from "./admin/post-form/post-form.component";

import { GalleryComponent } from './post components/gallery/gallery.component';
import { CardComponent } from "./post components/card/card.component";
import { PostDetailsComponent } from "./post components/post-details/post-details.component";
import { LoginComponent } from "./admin/login-form/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    

    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    InfiniteScrollModule,
    FontAwesomeModule,
    JoditAngularModule ,
    Md2Module
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostDetailsComponent,
    CardComponent,
    HeaderComponent,
    MousewheelComponent,
    PageNotFoundComponent,
    EscapeHtmlPipe,
    GalleryComponent
  ],
  providers: [
    DataService,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
