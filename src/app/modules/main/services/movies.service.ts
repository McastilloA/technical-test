import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DetailMovie, ResponseInterface } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  getMoviesByFilter(filter: string): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(this.utilsService.getResponseUrl(filter));
  }

  getMovieById(id: string): Observable<DetailMovie> {
    return this.http.get<DetailMovie>(this.utilsService.getResponseUrl(id));
  }

}
