import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';


import 'rxjs/add/operator/toPromise';

export interface LancamentoFiltro {
  descricao: string;
}

@Injectable()
export class LancamentosService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: AuthHttp) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams();

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { search: filtro })
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
