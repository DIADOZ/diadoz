import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from "@angular/material";
import { MatRadioModule } from "@angular/material";
import { MatListModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatButtonToggleModule } from "@angular/material";
import { MatDatepickerModule } from "@angular/material";
import { MatNativeDateModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { Angulartics2Module } from "angulartics2";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import { Md2DatepickerModule, MdNativeDateModule } from "md2";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthGuard } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { DataService } from "./services/data.service";

import { EscapeHtmlPipe } from "./pipes/keep-html.pipe";

import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/404-page/not-found.component";
import { MousewheelComponent } from "./components/mousewheel/mousewheel.component";

import { AdminComponent } from "./admin components/admin/admin.component";
import { LoginComponent } from "./admin components/login-form/login.component";
import { PostListComponent } from "./admin components/post-list/post-list.component";
import { PostFormComponent } from "./admin components/post-form/post-form.component";
import { GalleryFormComponent } from './admin components/gallery-form/gallery-form.component';
import { PostReviewComponent } from './admin components/post-review/post-review.component';
import { MediaFormComponent } from "./admin components/media-form/media-form.component";
import { ArtCardFormComponent } from './admin components/art-card-form/art-card-form.component';
import { TextFormComponent } from './admin components/text-form/text-form.component';
import { PiecesFormComponent } from './admin components/pieces-form/pieces-form.component';

import { GalleryComponent } from './post components/gallery/gallery.component';
import { CardComponent } from "./post components/card/card.component";
import { PostDetailsComponent } from "./post components/post-details/post-details.component";


const appRoutes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
  // re-add canActivate: [AuthGuard] to admin path

  { path: "", component: HomeComponent},
  // { path: 'home', component: HomeComponent},
  { path: "post/:customURL", component: PostDetailsComponent},
  { path: "admin/form", component: PostFormComponent},
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent,
    CardComponent,
    HeaderComponent,
    MousewheelComponent,
    PostFormComponent,
    AdminComponent,
    MediaFormComponent,
    LoginComponent,
    PageNotFoundComponent,
    EscapeHtmlPipe,
    PostListComponent,
    GalleryComponent,
    MediaFormComponent,
    ArtCardFormComponent,
    TextFormComponent,
    GalleryFormComponent,
    PostReviewComponent,
    PiecesFormComponent,
  ],
  imports: [
    Md2DatepickerModule,
    HttpModule,
    MdNativeDateModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    InfiniteScrollModule,
    MatButtonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  entryComponents: [
    PostFormComponent,
    MediaFormComponent,
  ],
  providers: [
    DataService,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
