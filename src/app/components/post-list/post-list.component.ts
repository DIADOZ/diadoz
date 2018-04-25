import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

import { ActivatedRoute, Params } from "@angular/router";
import { Post } from "../post-form/data-class";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  public list = [];
  public postData;
  public formDisplay = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  public ngOnInit() {
    this.renderPosts();
  }

  public renderPosts() {
    this.list = [];
    this.dataService.getAllPosts().subscribe((posts) => {
      this.list = posts;
    });
  }

  public showForm() {
    // bring up default form
    // clear form
    const postTypes = ["Article", "Gallery"];
    let publishedBy;
    this.route.queryParams.subscribe((params: Params) => {
      publishedBy = params.user;
      this.postData = {
        headline: "",
        subHeadline: "",
        featuredImage: "",
        customURL: "",
        publishDate: new Date(),
        published: true,
        publishedBy: publishedBy,
        postType: postTypes[0],
        gallery: {},
        body: []
      }
      this.formDisplay = true;
    });
  }

  public hideForm() {
    this.formDisplay = false;
  }

  public editPost(postID) {
    // call to bring data from post
    this.populateEditForm(postID);
    // bring up the form with values added
    this.formDisplay = !this.formDisplay;
  }

  public deletePost(postID) {
    // prompt to make sure you want to delete post
    // send call to server to delete post
    this.dataService.deletePost(postID).subscribe(() => {
      this.renderPosts();
    });
  }

  public sentSubmit(submitted) {
    if (submitted) {
      this.formDisplay = false;
      this.renderPosts();
    }
  }

  private populateEditForm(url) {
    const data = {
      customURL: url,
    };
    this.dataService.getPostByURL(data).subscribe((post) => {
      // populate edit form
      this.postData = {
        id: post._id,
        headline: post.headline,
        subHeadline: post.subHeadline,
        featuredImage: post.featuredImage,
        customURL: post.customURL,
        publishDate: post.publishDate,
        published: post.published,
        publishedBy: post.publishedBy,
        postType: post.postType,
        gallery: post.gallery,
        body: post.body
      };
    });
  }
}
