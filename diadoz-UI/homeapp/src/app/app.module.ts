import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';


import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { MousewheelComponent } from './components/mousewheel/mousewheel.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { MediaFormComponent } from "./components/media-form/media-form.component";
import { LoginComponent } from './components/login-form/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  // re-add canActivate: [AuthGuard] to admin path

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'post/:customURL', component: PostDetailsComponent},
  //{ path: '**', component: PageNotFoundComponent }
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
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
    InfiniteScrollModule
  ],
  entryComponents: [
    PostFormComponent,
    MediaFormComponent
  ],
  providers: [
    DataService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
