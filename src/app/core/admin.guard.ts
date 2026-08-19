import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthFacade } from './facades/auth.facade';

export const adminGuard: CanActivateFn = () => {
const authService = inject(AuthService);
const router = inject(Router);

if (!authService.estaLogado()) {
    return true;
}
return router.createUrlTree(['/login']);
};

