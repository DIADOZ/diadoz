import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Angulartics2Module } from "angulartics2";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import { Md2DatepickerModule, MdNativeDateModule } from "md2";
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

import { AdminModule } from "./admin components/admin.module";
import { PostFormComponent } from "./admin components/post-form/post-form.component";

import { GalleryComponent } from './post components/gallery/gallery.component';
import { CardComponent } from "./post components/card/card.component";
import { PostDetailsComponent } from "./post components/post-details/post-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent,
    CardComponent,
    HeaderComponent,
    MousewheelComponent,
    PageNotFoundComponent,
    EscapeHtmlPipe,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    BrowserAnimationsModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    JoditAngularModule ,
    MdNativeDateModule,
    Md2DatepickerModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    DataService,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
