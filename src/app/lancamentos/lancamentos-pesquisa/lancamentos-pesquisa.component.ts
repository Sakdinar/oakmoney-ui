import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms/forms';
import { Title } from '@angular/platform-browser';

import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { DataTable } from 'primeng/components/datatable/datatable';
import { ToastyService } from 'ng2-toasty';

import { LancamentosService, LancamentoFiltro } from './../lancamentos.service';
import { ErrorHandlerService } from './../../oak-core/error-handler.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent implements OnInit {

  pt_calendar: any;

  filtro = new LancamentoFiltro();

  lancamentos = [];
  totalRegistros = 0;
  @ViewChild('tabela') grid: DataTable;

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de Lançamentos');

    this.pt_calendar = {
      firstDayOfWeek: 0,
      weekHeader: 'Semana',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',
      timeOnlyTitle: 'Só Horas',
      timeText: 'Tempo',
      hourText: 'Hora',
      minuteText: 'Minuto',
      secondText: 'Segundo',
      currentText: 'Data Atual',
      ampm: false,
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      allDayText : 'Todo Dia'
    };
  }

  constructor(
    private lancamentosService: LancamentosService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService
  ) {}


  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentosService.pesquisar(this.filtro)
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Deseja confirmar a exclusão?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  private excluir(lancamento: any) {
    this.lancamentosService.excluir(lancamento.codigo)
    .then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.first = 0;
      }
      this.toasty.success('Lançamento excluído com sucesso.');
    });
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
