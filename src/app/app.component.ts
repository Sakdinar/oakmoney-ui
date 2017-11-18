import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';
import { AuthService } from './seguranca/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router,
    private auth: AuthService
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  exibindoNavbar(): boolean | Promise<boolean> {
    return this.router.url !== '/login' && !this.auth.isAccessTokenInvalido();
  }
}
