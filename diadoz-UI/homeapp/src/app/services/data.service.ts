import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  public url: string = './assets/data/posts.json';

  constructor(private http: Http) {
    console.log("DataService is connected...");
  }

  getPosts(){
    return this.http.get('./assets/data/posts')
      .map(res => res.json());
  }

  // public getPosts(): Promise<Object> {
  //   return this.http.get(this.url)
  //     .toPromise()
  //     .then((response) => {
  //       return response.json();
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  // }

}
