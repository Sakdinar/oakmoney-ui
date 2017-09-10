import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LancamentosService } from './../lancamentos.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { PessoasService } from './../../pessoas/pessoas.service';
import { Lancamento } from './../../oak-core/models/lancamento';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../../oak-core/error-handler.service';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html'
})
export class LancamentosCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA'},
    { label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private lancamentoService: LancamentosService,
    private categoriasService: CategoriasService,
    private pessoasService: PessoasService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: FormControl) {
    this.lancamentoService.salvar(this.lancamento)
      .then((novoLancamento) => {
        this.toasty.success('Lançamento adicionado com sucesso.');
        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

  private carregarCategorias() {
    return this.categoriasService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map(c =>  ({ label: c.nome, value: c.codigo }) );
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private carregarPessoas() {
    return this.pessoasService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map(p => ( {label: p.nome, value: p.codigo} ));
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

}
