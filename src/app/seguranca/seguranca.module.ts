import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { OakCommonsModule } from './../oak-commons/oak-commons.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OakCommonsModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class SegurancaModule { }
