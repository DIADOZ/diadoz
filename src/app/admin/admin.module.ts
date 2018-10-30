import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule }   from '@angular/common';

import { MatSidenavModule } from "@angular/material";
import { MatCheckboxModule } from "@angular/material";
import { MatRadioModule } from "@angular/material";
import { MatListModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatButtonToggleModule } from "@angular/material";
import { MatDatepickerModule } from "@angular/material";
import { MatNativeDateModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { Angulartics2Module } from "angulartics2";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import { Md2DatepickerModule, MdNativeDateModule } from "angular-md2";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JoditAngularModule } from 'jodit-angular';

import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { MediaFormComponent } from "./media-form/media-form.component";
import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
 
import { AdminRoutingModule } from './admin-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,

    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
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
    FontAwesomeModule,
    JoditAngularModule ,
    MdNativeDateModule,
    Md2DatepickerModule,
  ],
  entryComponents: [
    PostFormComponent,
  ],
  declarations: [
    AdminComponent,
    PostListComponent,
    PostFormComponent,
    MediaFormComponent,
    GalleryFormComponent,
  ]
})
export class AdminModule {}