import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard }                from '../auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AdminPostEditService } from './admin-post-edit.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'form', component: PostFormComponent },
      { 
        path: ':id', component: PostFormComponent,
        resolve: {
          postData: AdminPostEditService
        } 
      },
      
      
      { path: '', component: PostListComponent },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AdminPostEditService
  ]
})
export class AdminRoutingModule {}