import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Movies, Data } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  baseUrl: string = 'https://jsonmock.hackerrank.com/api/moviesdata';

  constructor(private http: HttpClient) { }

  getMovies(query?:string, substr?: string, page?: string) {
    return this.http.get(`${this.baseUrl}/${query ? query : ''}${substr ? substr : ''}${page ? page : ''}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return throwError(() => new Error(errMessage));
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(() => new Error(error || 'Node.js server error'));
  }

}

