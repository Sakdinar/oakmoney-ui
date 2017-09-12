import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import { Pessoa } from './../oak-core/models/pessoa';

import 'rxjs/add/operator/toPromise';

export class PessoaFiltro {
  ativo: boolean;
  nome: string;
  bairro: string;
  cidade: string;
  estado: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable()
export class PessoasService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: AuthHttp) { }

  listarTodas(): Promise<any> {
    return this.http.get(this.pessoasUrl)
      .toPromise()
      .then((resposta) => {
        let pessoas = [];
        if (resposta.status && resposta.status === 200) {
          const responseJson = resposta.json();
          pessoas = responseJson.content;
        }

        return pessoas;
      });
  }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(this.pessoasUrl, {search: params})
      .toPromise()
      .then(response => {
        let pessoas = [];
        if (response.status === 204) {
          return pessoas;
        }
        const responseJson = response.json();
        pessoas = response.json().content;

        const resultado = {
          pessoas,
          total: responseJson.totalElements
        };
        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  alterarStatus(pessoa: any, ativo: boolean): Promise<boolean> {
    const codigo = pessoa.codigo;
    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo)
      .toPromise()
      .then(() => {
        return ativo;
      });
  }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post(this.pessoasUrl, JSON.stringify(pessoa))
      .toPromise()
      .then((novoLancamento) => novoLancamento.json());
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then((pessoa) => {
        return pessoa.json();
      });
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.put(`${this.pessoasUrl}/${pessoa.codigo}`, JSON.stringify(pessoa))
      .toPromise()
      .then((pessoaAtualizada) => {
        return pessoaAtualizada.json();
      });
  }

}
