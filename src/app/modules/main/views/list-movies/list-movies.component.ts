import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { Movies, ResponseInterface } from '../../interfaces/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  // Variables globales
  $unSubscribe = new Subject<void>();
  cards: Movies[] = [];
  // @ts-ignore
  registerForm: FormGroup;
  validateMessage = true;
  messageError = 'Datos pendientes por registrar';

  constructor(public moviesService: MoviesService, private fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      titleMovie: [null, Validators.required],
      yearMovie: [null, Validators.required]
    });
  }

  onSubmittedFilter() {
    let filterT = this.registerForm.value.titleMovie ? `s=${this.registerForm.value.titleMovie}` : null;
    let filterY = this.registerForm.value.yearMovie ? `y=${this.registerForm.value.yearMovie}` : null;

    if (filterT !== null || filterY !== null) {
      this.moviesService.getMoviesByFilter(`${filterT}&${filterY}`)
        .pipe(takeUntil(this.$unSubscribe)).subscribe((resp: ResponseInterface) => {
          if (resp.Response === 'True') {
            this.validateMessage = false;
            this.cards = resp.Search;
          } else {
            this.validateMessage = true;
            this.cards = [];
            alert(resp.Error);
          }
        });
    } else {
      this.cards = [];
      this.validateMessage = true;
      return alert(this.messageError);
    }
  }

}
