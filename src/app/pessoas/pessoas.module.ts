import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OakCommonsModule } from './../oak-commons/oak-commons.module';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OakCommonsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    DropdownModule,
    InputMaskModule,
  ],
  declarations: [
    PessoasPesquisaComponent,
    PessoasCadastroComponent,
    PessoasGridComponent,
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoasCadastroComponent,
  ]
})
export class PessoasModule { }
