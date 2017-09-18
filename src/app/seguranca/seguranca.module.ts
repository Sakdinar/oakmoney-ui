import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { OakCommonsModule } from './../oak-commons/oak-commons.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './auth.service';
import { OakmoneyHttpInterceptor } from './oakmoney-http-interceptor';
import { AuthGuard } from './auth.guard';

export function authHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });

  return new OakmoneyHttpInterceptor(auth, config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OakCommonsModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [AuthService, Http, RequestOptions]
    },
    AuthGuard
  ]
})
export class SegurancaModule { }
