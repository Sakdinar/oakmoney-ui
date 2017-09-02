import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class LancamentosService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: AuthHttp) { }

  pesquisar(): Promise<any> {
       return this.http.get(`${this.lancamentosUrl}?resumo`)
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const lancamentos = responseJson.content;

        const resultado = {
          lancamentos,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }


}
