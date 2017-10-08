import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

import { DataService } from './services/data.service';

import { RouterModule, Routes } from '@angular/router';
import { MousewheelComponent } from './components/mousewheel/mousewheel.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home/:id', component: PostDetailsComponent},
  { path: '', component: HomeComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent,
    CardComponent,
    HeaderComponent,
    MousewheelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
