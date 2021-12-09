import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = {description: "", downvote: 0, id: 0, image: "", releaseDate: "", title: "", upvote: 0};
  numberOfActors: number = 0;
  errorMsg: string = "";
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.getActorsOfMovie(this.movie.id)
      .subscribe(data => this.numberOfActors = data.length,
                error => this.errorMsg = error);
  }

  upvoteClick() {
    this.movie.upvote += 1;
    let tempImage = this.movie.image;
    let temp: any = this.movie;
    delete temp.image;
    this._movieService.voteChangeHandler(this.movie.id, temp)
      .subscribe(data => console.log(data),
                error => this.errorMsg = error);
    this.movie.image = tempImage;
  }

  downvoteClick() {
    this.movie.downvote -= 1;
    let tempImage = this.movie.image;
    let temp: any = this.movie;
    delete temp.image;
    this._movieService.voteChangeHandler(this.movie.id, temp)
      .subscribe(data => console.log(data),
                error => this.errorMsg = error);
    this.movie.image = tempImage;
  }
}
