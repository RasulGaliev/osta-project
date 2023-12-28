// localization-interceptor.service.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';

@Injectable()
export class LocalizationInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Получите значение из localStorage или установите значение по умолчанию
    const lang = localStorage.getItem('lang') || 'ru';

    // Клонируйте запрос и добавьте заголовок
    const clonedRequest = request.clone({
      setHeaders: { 'X-Localization': lang },
    });

    // Пропустите измененный запрос через цепочку обработчиков
    return next.handle(clonedRequest);
  }
}
