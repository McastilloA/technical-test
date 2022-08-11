import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { DetailMovie } from '../../interfaces/movies';
import { DetailGeneral } from '../../models/details-movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  // Variables globales
  myParamId: string | undefined;
  $unSubscribe = new Subject<void>();
  detailsMovie = new DetailGeneral();
  validateMessage = true;

  constructor(private route: ActivatedRoute, public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getParamById();
  }

  getParamById() {
    this.route.params.subscribe((params: Params) => {
      this.myParamId = params['id'];
      this.filterById(this.myParamId);
    });
  }

  filterById(id: string | undefined) {
    this.moviesService.getMovieById(`i=${id}`)
      .pipe(takeUntil(this.$unSubscribe)).subscribe((resp: DetailMovie) => {
        if (resp.Response === 'True') {
          this.validateMessage = false;
          this.detailsMovie = resp;
        } else {
          this.validateMessage = true;
          alert(resp.Error);
        }

        
      });
  }

}
