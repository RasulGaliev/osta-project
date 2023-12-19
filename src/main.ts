import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

localStorage.setItem('lang', 'ru');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
