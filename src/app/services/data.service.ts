import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  // public url: string = './assets/data/posts.json';

  constructor(private http: Http) {
    console.log("DataService is connected...");
  }

  getPosts(page) {
    // return this.http.get('./assets/data/posts')
    return this.http.get("/api/post/", { params: {pageNumber: page}})
      .map((res) => res.json());
  }

  getPost(data) {
    const customURL = data.customURL;
    // return this.http.get('./assets/data/posts')
    return this.http.get(`/api/post/${customURL}`)
      .map((res) => res.json());
  }

  insertPost(data) {
    // return this.http.get('./assets/data/posts')
    return this.http.post("/api/post/insert", data)
      .map((res) => res);
  }
  logIn(data) {
    // return this.http.get('./assets/data/posts')
    return this.http.post("/api/user/login", data)
      .map((res) => res.json());
  }
}
