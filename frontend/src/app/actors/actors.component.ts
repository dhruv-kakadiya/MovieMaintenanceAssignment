import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { AppService } from '../app.service';
import { ActorService } from './../actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[] = [];
  errorMsg: string = "";
  constructor(private _actorService: ActorService, private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.actorClick();

    this._actorService.getActors()
      .subscribe(data => this.actors = data,
                error => this.errorMsg = error);    
  }
}
