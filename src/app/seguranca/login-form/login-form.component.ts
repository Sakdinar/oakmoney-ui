import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent  {

  constructor(private authService: AuthService) {}

  login(usuario: string, senha: string) {
    console.log(`usuario: ${usuario} e senha: ${senha}`);
    this.authService.login(usuario, senha);
  }

}
