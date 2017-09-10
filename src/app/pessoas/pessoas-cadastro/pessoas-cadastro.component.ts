import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { Pessoa } from './../../oak-core/models/pessoa';
import { PessoasService } from './../pessoas.service';
import { ErrorHandlerService } from './../../oak-core/error-handler.service';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html'
})
export class PessoasCadastroComponent implements OnInit {

  estados = [{
    'value': 'AC',
    'label': 'AC'
  },
       {
    'value': 'AL',
    'label': 'AL'
  },
       {
    'value': 'AM',
    'label': 'AM'
  },
       {
    'value': 'AP',
    'label': 'AP'
  },
       {
    'value': 'BA',
    'label': 'BA'
  },
       {
    'value': 'CE',
    'label': 'CE'
  },
       {
    'value': 'DF',
    'label': 'DF'
  },
       {
    'value': 'ES',
    'label': 'ES'
  },
       {
    'value': 'GO',
    'label': 'GO'
  },
       {
    'value': 'MA',
    'label': 'MA'
  },
       {
    'value': 'MG',
    'label': 'MG'
  },
       {
    'value': 'MS',
    'label': 'MS'
  },
       {
    'value': 'MT',
    'label': 'MT'
  },
       {
    'value': 'PA',
    'label': 'PA'
  },
       {
    'value': 'PB',
    'label': 'PB'
  },
       {
    'value': 'PE',
    'label': 'PE'
  },
       {
    'value': 'PI',
    'label': 'PI'
  },
       {
    'value': 'PR',
    'label': 'PR'
  },
       {
    'value': 'RJ',
    'label': 'RJ'
  },
       {
    'value': 'RN',
    'label': 'RN'
  },
       {
    'value': 'RO',
    'label': 'RO'
  },
       {
    'value': 'RR',
    'label': 'RR'
  },
       {
    'value': 'RS',
    'label': 'RS'
  },
       {
    'value': 'SC',
    'label': 'SC'
  },
       {
    'value': 'SE',
    'label': 'SE'
  },
       {
    'value': 'SP',
    'label': 'SP'
  },
       {
    'value': 'TO',
    'label': 'TO'
  }];

  pessoa = new Pessoa();

  constructor(
    private pessoasService: PessoasService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.pessoasService.salvar(this.pessoa)
      .then((novaPessoa) => {
        this.toasty.success(`${novaPessoa.nome} inserido(a) com sucesso.`);
        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

}
