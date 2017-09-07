import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OakCommonsModule } from './../oak-commons/oak-commons.module';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosService } from './lancamentos.service';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
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
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule,
  ],
  declarations: [
    LancamentosPesquisaComponent,
    LancamentosCadastroComponent
  ],
  exports: [
    LancamentosPesquisaComponent,
    LancamentosCadastroComponent,
  ],
  providers: [
    LancamentosService
  ]
})
export class LancamentosModule { }
