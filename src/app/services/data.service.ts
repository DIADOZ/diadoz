import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Post, PostInfo } from "../admin components/post-form/data-class";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
  // public url: string = './assets/data/posts.json';
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
    console.log("DataService is connected...");
  }

  public getAllPosts() {
    // return this.http.get('./assets/data/posts')
    return this.http.get<Post[]>("/api/post/all");
  }

  public getPosts(page) {
    // return this.http.get('./assets/data/posts')
    return this.http.get("/api/post/", { params: {pageNumber: page}})
      .map((res) => res);
  }

  public getPostByURL(data) {
    const customURL = data.customURL;
    // return this.http.get('./assets/data/posts')
    return this.http.get<PostInfo>(`/api/post/${customURL}`);
  }

  public getPostByID(id) {
    // return this.http.get('./assets/data/posts')
    return this.http.get<Post>(`/api/post/${id}`).pipe(
      map(post => post)
    );
  }

  public deletePost(id) {
    return this.http.delete(`/api/post/delete`, { params: {_id: id}})
      .map((res) => res);
  }

  public insertPost(data) {
    // return this.http.get('./assets/data/posts')
    return this.http.post("/api/post/insert", data)
      .map((res) => res);
  }
  public updatePost(data) {
    // return this.http.get('./assets/data/posts')
    return this.http.put("/api/post/update", data)
      .map((res) => res);
  }
  public logIn(data) {
    // return this.http.get('./assets/data/posts')
    return this.http.post("/api/user/login", data)
      .map((res) => res);
  }
}
