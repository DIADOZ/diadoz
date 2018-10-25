import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Post, PostInfo } from "../admin/post-form/data-class";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class DataService {
  // public url: string = './assets/data/posts.json';
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
    console.log("DataService is connected...");
  }

  getAllPosts(): Observable<Post[]> {
    // return this.http.get('./assets/data/posts')
    return this.http.get<Post[]>("/api/post/all").pipe(
      // TODO: add logging for succesful event
      //tap(post => this.log('fetched heroes')),
      catchError(this.handleError('getAllPosts', []))
    );
  }


  public getPosts(page) {
    // return this.http.get('./assets/data/posts')
    return this.http.get("/api/post/", { params: {pageNumber: page}})
      .map((res) => res);
  }

  public getPostByURL(customURL) {
    // return this.http.get('./assets/data/posts')
    return this.http.get<PostInfo>(`/api/post/${customURL}`);
  }

  public getPostByID(id) {
    // return this.http.get('./assets/data/posts')
    return this.http.get<Post>(`/api/post/edit/${id}`);
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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: add a log function (message service on Angular website) 
      //       better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
