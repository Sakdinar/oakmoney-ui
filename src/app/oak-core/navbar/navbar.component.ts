import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../seguranca/auth.service';
import { LogoutService } from './../../seguranca/logout.service';
import { ErrorHandlerService } from './../error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private router: Router,
    private erroHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
        this.exibindoMenu = false;
      })
      .catch((error) => this.erroHandler.handle(error));
  }

  exibindoNavbar(): boolean | Promise<boolean> {

    return this.router.url !== '/login' && !this.auth.isAccessTokenInvalido();
  }

}
