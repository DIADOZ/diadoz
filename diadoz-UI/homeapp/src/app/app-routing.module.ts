import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login-form/login.component';
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  // re-add canActivate: [AuthGuard] to admin path

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'home/:id', component: PostDetailsComponent},
  { path: '', component: HomeComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
