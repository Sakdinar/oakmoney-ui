import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';

import { environment } from './../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriasService {

  categoriasUrl: string;

  constructor(private http: AuthHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.categoriasUrl)
      .toPromise()
      .then((categorias) => {
        return categorias.json();
      });
  }

}
