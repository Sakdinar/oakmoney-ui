import { ErrorHandlerService } from './../../oak-core/error-handler.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent  {

  constructor(
    private authService: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  login(usuario: string, senha: string) {
    console.log(`usuario: ${usuario} e senha: ${senha}`);
    this.authService.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((erro) => {
        this.errorHandler.handle(erro);
      });
  }

}
