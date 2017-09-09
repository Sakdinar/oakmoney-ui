import { Injectable } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(erroResponse: any) {
    let msg: string;

    if (typeof erroResponse === 'string') {
      msg = erroResponse;
    } else {
      msg = 'Erro ao processar serviço remoto. Contate o administrador do sistema.';
      console.log('Ocorreu um erro: ', erroResponse);
    }

    this.toasty.error(msg);
  }

}