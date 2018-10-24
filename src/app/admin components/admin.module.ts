import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material";
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
import { Angulartics2Module } from "angulartics2";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import { Md2DatepickerModule, MdNativeDateModule } from "md2";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JoditAngularModule } from 'jodit-angular';

import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { MediaFormComponent } from "./media-form/media-form.component";
import { ArtCardFormComponent } from './art-card-form/art-card-form.component';
import { TextFormComponent } from './text-form/text-form.component';
import { PiecesFormComponent } from './pieces-form/pieces-form.component';
 
import { AdminComponent } from './admin.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
 
import { AdminRoutingModule } from './admin-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    BrowserModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
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
    ArtCardFormComponent,
    TextFormComponent,
    GalleryFormComponent,
    PostReviewComponent,
    PiecesFormComponent,
  ]
})
export class AdminModule {}