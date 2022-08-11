import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './main-routing.module';
import { ListMoviesComponent } from './views/list-movies/list-movies.component';
import { DetailMovieComponent } from './views/detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    ListMoviesComponent,
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
