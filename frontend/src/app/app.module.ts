import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';

import { ActorService } from './actor.service';
import { MovieService } from './movie.service';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ActorsComponent,
    ActorComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ActorService, MovieService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
