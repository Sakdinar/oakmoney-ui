import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosCadastroComponent } from './lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { PaginaoNaoEncontratoComponent } from './oak-core/paginao-nao-encontrato/paginao-nao-encontrato.component';
import { NaoAutorizadoComponent } from './oak-core/nao-autorizado/nao-autorizado.component';

const rotas: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'pagina-nao-encontrada', component: PaginaoNaoEncontratoComponent },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  //  otherwise
  { path: '**', redirectTo: 'pagina-nao-encontrada' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
