import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable()
export class LancamentosService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: AuthHttp) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoInicio && filtro.dataVencimentoFim) {
      params.set('dataVencimentoInicial', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
      params.set('dataVencimentoFinal', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { search: params })
      .toPromise()
      .then(response => {
        let lancamentos = [];
        if (response.status === 204) {
          return lancamentos;
        }
        const responseJson = response.json();
        lancamentos = response.json().content;

        const resultado = {
          lancamentos,
          total: responseJson.totalElements
        };
        return resultado;
      });
  }

}
