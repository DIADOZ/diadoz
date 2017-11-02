import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  // public url: string = './assets/data/posts.json';

  constructor(private http: Http) {
    console.log("DataService is connected...");
  }

  getPosts(page){
    // return this.http.get('./assets/data/posts')
    return this.http.get('http://localhost:3000/api/post/', { params: {pageNumber: page}})
      .map(res => res.json());
  }

  getPost(customURL){
    //return this.http.get('./assets/data/posts')
    return this.http.get(`http://localhost:3000/api/post/${customURL}`)
      .map(res => res.json());
  }

  insertPost(data){
    // return this.http.get('./assets/data/posts')
    return this.http.post('http://localhost:3000/api/post/insert', data)
      .map(res => res);
  }
  logIn(data){
    // return this.http.get('./assets/data/posts')
    return this.http.post('http://localhost:3000/api/user/login', data)
      .map(res => res.json());
  }
}
