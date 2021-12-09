import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  home: boolean = true;
  movie: boolean = false;
  actor: boolean = false;
  constructor() { }

  homeClick() {
    this.home = true;
    this.movie = false;
    this.actor = false;
  }

  movieClick() {
    this.home = false;
    this.movie = true;
    this.actor = false;
  }

  actorClick() {
    this.home = false;
    this.movie = false;
    this.actor = true;
  }
}
