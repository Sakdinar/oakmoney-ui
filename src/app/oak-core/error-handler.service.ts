import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { ToastyService } from 'ng2-toasty';

export class NotAuthenticatedError {}

@Injectable()
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService,
    private router: Router
  ) { }

  handle(erroResponse: any) {
    let msg: string;

    if (typeof erroResponse === 'string') {
      msg = erroResponse;

    } else if (erroResponse instanceof NotAuthenticatedError) {
      msg = 'Sessão expirada. Realize login novamente';
      this.router.navigate(['/login']);
    } else if (
        erroResponse instanceof Response
        && erroResponse.status >= 400
        && erroResponse.status <= 499
      ) {
      let errors;
      console.log('É um response');
      try {
        errors = erroResponse.json();

        msg = errors[0].mensagemUsuario;
      } catch (e) {
        msg = 'Ocorreu um erro ao processar a sua solicitação.';
      }

      console.log('Ocorreu um erro: ', erroResponse);
    } else {
      msg = 'Erro ao processar serviço remoto. Contate o administrador do sistema.';
      console.log('Ocorreu um erro: ', erroResponse);
    }

    this.toasty.error(msg);
  }

}
