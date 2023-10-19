import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export const ApiGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  return apiService.getAccessToken();
}