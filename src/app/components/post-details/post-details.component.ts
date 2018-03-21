import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { fbButton, tw } from "vanilla-sharing";

import { DataService } from "../../services/data.service";

import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"],
})
export class PostDetailsComponent implements OnInit {
  color = 'black';
  public post$;
  public post = {
    _id: 0,
    headline: "",
    subHeadline: "",
    featuredImage: "",
    customURL: "",
    postType: "",
    publishDate: "",
    published: false,
    publishedBy: "",
    body: [],
  };

  private selectedId: number;
  constructor(
    private route: ActivatedRoute,
    protected dataService: DataService,
  ) { }

  public ngOnInit() {
    this.post$ = this.route.params
      .switchMap((params: ParamMap) =>
        this.dataService.getPost(params),
      )
      .subscribe((post)  =>
        this.post = post,
      );

  }
  public fbClick() {
    fbButton({
      url: "diadoz.com/post/" + this.post.customURL, // TODO: remove hard coded diadoz.com
    });
  }
  public twClick() {
    tw({
      url: "diadoz.com/post/" + this.post.customURL, // TODO: remove hard coded diadoz.com
      title: this.post.headline,
    });
  }
}
