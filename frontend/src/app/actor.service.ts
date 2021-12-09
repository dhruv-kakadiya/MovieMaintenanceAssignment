import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actor } from './actor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ActorMovie } from './actormovie';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private _url:string = "http://127.0.0.1:8000/api/get-actors-list/";
  private _url2:string = "http://127.0.0.1:8000/api/get-movies-list-actor/";
  constructor(private http:HttpClient) { }

  getActors(): Observable<Actor[]>{
    return this.http.get<Actor[]>(this._url)
                    .catch(this.errorHandler);
  }

  getMoviesOfActor(id: number): Observable<ActorMovie[]>{
    return this.http.get<ActorMovie[]>(`${this._url2}${id}`)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
