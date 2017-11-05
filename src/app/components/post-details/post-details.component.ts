import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { DataService } from "../../services/data.service";

import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"],
})
export class PostDetailsComponent implements OnInit {
  post$;
  post = {
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
        this.dataService.getPost(params.keys),
      )
      .subscribe((post)  =>
        this.post = post,
      );
  }
}
