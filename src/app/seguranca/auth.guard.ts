import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private toasty: ToastyService,
    private router: Router
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isAccessTokenInvalido()) {
      console.log('Obtendo novo access token...');
      return this.auth.obterNovoAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalido()) {
            this.router.navigate(['/login']);
            return false;
          }
        });

    } else if (!next.data.roles || !this.auth.temUmaDasPermissoes(next.data.roles)) {
      this.toasty.warning('Permissão negada. Você não pode acessar o conteúdo solicitado.');
      return false;
    }
    return true;
  }
}
