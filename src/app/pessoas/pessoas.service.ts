import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

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

}
