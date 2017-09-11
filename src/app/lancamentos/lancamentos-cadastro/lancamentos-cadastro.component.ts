import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  pageTitle = 'Novo Lançamento';
  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();
  isEdit = false;

  constructor(
    private lancamentoService: LancamentosService,
    private categoriasService: CategoriasService,
    private pessoasService: PessoasService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de Lançamento');
    if (undefined !== this.activatedRoute.snapshot.params['codigo']) {
      const codigo = this.activatedRoute.snapshot.params['codigo'];
      this.pesquisarLancamentoParaAtualizar(codigo);
      this.isEdit = true;
      this.pageTitle = 'Atualizar Lançamento';

    }
    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: FormControl) {
    if (this.isEdit) {
      this.atualizarLancamento(form);
    } else {
      this.novoLancamento(form);
    }
  }

  private atualizarLancamento(form: FormControl) {
    this.lancamentoService.atualizar(this.lancamento)
      .then(() => {
        form.reset();
        this.router.navigate(['/lancamentos']);
        this.toasty.success('Lançamento atualizado com sucesso.');
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

  private novoLancamento(form: FormControl) {
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

  private pesquisarLancamentoParaAtualizar(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
    .then((lancamentoConsultado) => {
      this.lancamento = lancamentoConsultado;
      this.atualizarTitle();
    });
  }

  private atualizarTitle() {
    this.title.setTitle(`Atualização de Lançamento: ${this.lancamento.descricao}`);
  }

}
