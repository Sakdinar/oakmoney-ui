import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/forms';

import { LancamentosService } from './../lancamentos.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent {

  constructor(private lancamentosService: LancamentosService) {}

  lancamentos = [];

  pesquisar() {
    this.lancamentos = this.lancamentosService.pesquisar();
  }
}
