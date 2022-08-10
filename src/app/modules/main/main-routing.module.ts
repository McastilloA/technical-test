import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMovieComponent } from './views/detail-movie/detail-movie.component';
import { ListMoviesComponent } from './views/list-movies/list-movies.component';


const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent
  },
  {
    path: 'detail/:id',
    component: DetailMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
