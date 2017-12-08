import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  public list = [];
  constructor(private dataService: DataService) { }

  public ngOnInit() {
    this.dataService.getAllPosts().subscribe((posts) => {
      this.list = posts;
    });
  }

  public addPost() {
    // bring up default form
  }

  public editPost() {
    // call to bring data from post
    // bring up the form with values added
  }

  public deletePost() {
    // prompt to make sure you want to delete post
    // send call to server to delete post
  }
}
