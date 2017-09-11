import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';

const rotasLancamento: Routes = [
  { path: 'lancamentos', component: LancamentosPesquisaComponent },
  { path: 'lancamentos/novo', component: LancamentosCadastroComponent },
  { path: 'lancamentos/:codigo', component: LancamentosCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rotasLancamento)
  ],
  exports: [
    RouterModule
  ]
})
export class LancamentosRoutingModule { }
