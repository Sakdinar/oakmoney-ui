import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { JwtHelper } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers } )
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);
      })
      .catch(error => {
        if (error.status === 400) {
          const responseJson = error.json();
          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida.');
          }

          return Promise.reject(error);
        }
      });
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  /**
   * Decodifica e armazena no localStorage do browser
   * @param token
   */
  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  /**
   * Verifica se existe token e armazena
   */
  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }

}
