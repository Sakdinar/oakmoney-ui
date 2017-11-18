import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import { Lancamento } from './../oak-core/models/lancamento';

import { environment } from './../../environments/environment';
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

  lancamentosUrl: string;

  constructor(private http: AuthHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`;
  }

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

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    return this.http.get(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then((response) => {
        const lancamento = response.json() as Lancamento;
        this.converterStringsParaData([lancamento]);

        return lancamento;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  salvar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.post(this.lancamentosUrl, JSON.stringify(lancamento))
      .toPromise()
      .then((novoLancamento) => novoLancamento.json());
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.put(`${this.lancamentosUrl}/${lancamento.codigo}`, JSON.stringify(lancamento))
      .toPromise()
      .then((response) => {
        return response.json();
      });
  }

  private converterStringsParaData(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }

}
