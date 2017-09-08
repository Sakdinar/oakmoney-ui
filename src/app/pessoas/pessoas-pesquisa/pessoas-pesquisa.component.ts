import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Component } from '@angular/core';
import { PessoasService, PessoaFiltro } from './../pessoas.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html'
})
export class PessoasPesquisaComponent {

  pessoas = [];
  filtro = new PessoaFiltro();
  totalRegistros = 0;

  constructor(private pessoasService: PessoasService) {}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoasService.pesquisar(this.filtro)
      .then(resultado => {
        this.pessoas = resultado.pessoas;
        this.totalRegistros = resultado.total;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
