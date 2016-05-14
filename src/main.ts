import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HttpDemoAppComponent, environment } from './app/';
import 'rxjs/add/operator/map';	

if (environment.production) {
  enableProdMode();
}


bootstrap(HttpDemoAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
