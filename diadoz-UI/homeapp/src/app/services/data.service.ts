import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log("DataService is connected...");
  }

  getPosts(){
    return this.http.get('http://localhost:4200/assets/posts.json')
      .map(res => res.json());
  }

}
