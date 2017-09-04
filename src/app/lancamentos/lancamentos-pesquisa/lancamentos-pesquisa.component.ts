import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/forms';

import { LancamentosService, LancamentoFiltro } from './../lancamentos.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent  {

  constructor(private lancamentosService: LancamentosService) {}

  descricao: string;
  lancamentos = [];

  pesquisar() {
    this.lancamentosService.pesquisar({ descricao: this.descricao })
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => console.log(erro));
  }
}
