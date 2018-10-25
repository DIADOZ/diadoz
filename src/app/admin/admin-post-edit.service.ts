import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY, of }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { Post } from './post-form/data-class';
import { DataService } from '../services/data.service';

@Injectable()
export class AdminPostEditService implements Resolve<Post> {

  constructor(private ds: DataService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    let id = route.paramMap.get('id');

    return this.ds.getPostByID(id).map(post => {
        if (post) {
          return post;
        } else {
          this.router.navigate(['/admin']);
          return null;
        }
      }
    );
  }
}
