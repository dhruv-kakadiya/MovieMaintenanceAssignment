import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ActorMovie } from './actormovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _url:string = "http://127.0.0.1:8000/api/get-movies-list/";
  private _url2:string = "http://127.0.0.1:8000/api/get-actors-list-movie/";
  private _url3:string = "http://127.0.0.1:8000/api/update-movie/";
  constructor(private http:HttpClient) { }

  getActors(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this._url)
                    .catch(this.errorHandler);
  }

  getActorsOfMovie(id: number): Observable<ActorMovie[]>{
    return this.http.get<ActorMovie[]>(this._url2 + id)
                    .catch(this.errorHandler);
  }

  voteChangeHandler(id: number, movie: any) {
    return this.http.put(this._url3 + id, movie)
                    .catch(this.errorHandler)
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
