import { Component, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { DataTable } from 'primeng/components/datatable/datatable';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

import { PessoasService, PessoaFiltro } from './../pessoas.service';
import { ErrorHandlerService } from './../../oak-core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html'
})
export class PessoasPesquisaComponent {

  pessoas = [];
  filtro = new PessoaFiltro();
  totalRegistros = 0;
  @ViewChild('tabela') grid: DataTable;

  constructor(
    private pessoasService: PessoasService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) {}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoasService.pesquisar(this.filtro)
      .then(resultado => {
        this.pessoas = resultado.pessoas;
        this.totalRegistros = resultado.total;
      });
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Deseja confirmar a exclusão?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  private excluir(pessoa: any) {
    this.pessoasService.excluir(pessoa.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
        this.toasty.success('Pessoa excluída com sucesso.');
      })
      .catch((error) => this.errorHandler.handle(error));
  }


}
