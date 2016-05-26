import { bootstrap }    from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from 'angular2/router';
// Add all operators to Observable
import 'rxjs/Rx';
import { AppComponent } from './app.component';


bootstrap(AppComponent);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/