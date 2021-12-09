import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Movie } from '../movie';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  errorMsg: string = "";
  constructor(private _movieService: MovieService, private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.movieClick();
    
    this._movieService.getActors()
      .subscribe(data => this.movies = data,
                error => this.errorMsg = error);    
  }

  sortByTitle() {
    this.movies.sort(function (a, b) {
      // var nameA = a.title.toUpperCase();
      // var nameB = b.title.toUpperCase();
      var nameA = a.title;
      var nameB = b.title;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  sortByDate() {
    this.movies.sort(function (a, b) {
      var nameA = a.releaseDate;
      var nameB = b.releaseDate;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
