import { Component, AfterViewChecked  } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked  {
  home: boolean = false;
  movie: boolean = false;
  actor: boolean = false;

  constructor(private _appService: AppService) {}

  ngAfterViewChecked (): void {
    this.home = this._appService.home;
    this.movie = this._appService.movie;
    this.actor = this._appService.actor;
  }
}
