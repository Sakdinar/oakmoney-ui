import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './../seguranca/auth.service';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthService,
    JwtHelper
  ]
})
export class OakCoreModule { }
