import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  // public url: string = './assets/data/posts.json';

  constructor(private http: Http) {
    console.log("DataService is connected...");
  }

  getPosts(){
    return this.http.get('./assets/data/posts')
    // return this.http.get('http://localhost:3000/api/post/')
      .map(res => res.json());
  }
}
