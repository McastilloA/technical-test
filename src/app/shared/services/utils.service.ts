import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public urlApi: string;

  constructor() {
    this.urlApi = environment.url_external;
  }


  getResponseUrl(urlExtended: string) {
    let api: string;

    if (environment.production) {
      api = `${this.urlApi}&${urlExtended}`
    } else {
      api = `${this.urlApi}&${urlExtended}`
    }
    return api;
  }

}
