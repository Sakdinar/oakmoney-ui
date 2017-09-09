import { NavbarComponent } from './navbar/navbar.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { JwtHelper } from 'angular2-jwt';
import { ToastyModule } from 'ng2-toasty';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

import { AuthService } from './../seguranca/auth.service';
import { CategoriasService } from './../categorias/categorias.service';
import { ErrorHandlerService } from './error-handler.service';
import { CustomCurrencyMaskConfig } from './../const/custom-currency-mask-config.const';

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    JwtHelper,
    ConfirmationService,
    ErrorHandlerService,
    AuthService,
    CategoriasService,
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ]
})
export class OakCoreModule { }
