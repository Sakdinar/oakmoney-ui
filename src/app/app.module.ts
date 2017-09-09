import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

import { AppComponent } from './app.component';
import { OakCoreModule } from './oak-core/oak-core.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,

    OakCoreModule,
    SegurancaModule,
    LancamentosModule,
    PessoasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
