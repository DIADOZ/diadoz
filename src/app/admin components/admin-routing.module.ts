import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//import { AuthGuard }                from '../auth/auth.guard';
import { AdminComponent } from './admin.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AdminPostEditService } from './admin-post-edit.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PostListComponent,
        children: [
          { 
            path: ':id', component: PostFormComponent,
            resolve: {
              postData: AdminPostEditService
            } 
          },
          { 
            path: ':customURL', component: PostFormComponent,
            resolve: {
              postData: AdminPostEditService
            } 
          },
          { path: 'post', component: PostFormComponent },
          // { path: '', component: PostListComponent },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}