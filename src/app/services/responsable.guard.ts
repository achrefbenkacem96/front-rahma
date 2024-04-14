import { CanActivateFn } from '@angular/router';

export const responsableGuard: CanActivateFn = (route, state) => {
  return true;
};
