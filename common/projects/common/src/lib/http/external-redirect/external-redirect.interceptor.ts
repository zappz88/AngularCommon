import { HttpInterceptorFn } from '@angular/common/http';

export const externalRedirectInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
