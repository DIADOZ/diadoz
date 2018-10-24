import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from "./components/404-page/not-found.component";
import { PostDetailsComponent } from './post components/post-details/post-details.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    // re-add canActivate: [AuthGuard] to admin path
    { 
        path: "admin", 
        loadChildren: './admin components/admin.module#AdminModule',

    },

    { path: "post/:customURL", component: PostDetailsComponent},
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
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