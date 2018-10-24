import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable, EMPTY, of }  from 'rxjs';

import { mergeMap, take }         from 'rxjs/operators';
import { Post } from './post-form/data-class';

@Injectable()
export class AdminPostEditService implements Resolve<any> {

  constructor(private ds: DataService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Observable<never> {
    let id = route.paramMap.get('id');

    return this.ds.getPostByID(id).pipe(
      take(1),
      mergeMap(post => {
        if (post) {
          return of(post);
        } else {
          this.router.navigate(['']);
          return EMPTY;
        }
      })
    );
  }
}
