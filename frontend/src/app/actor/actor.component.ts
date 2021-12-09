import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from './../actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() actor: Actor = {dob: "", id: 0, image: "", name: ""};
  errorMsg: string = "";
  numberOfMovies: number = 0;
  constructor(private _actorService: ActorService) { }

  ngOnInit(): void {
    this._actorService.getMoviesOfActor(this.actor.id)
      .subscribe(data => this.numberOfMovies = data.length,
                error => this.errorMsg = error);
  }
}
