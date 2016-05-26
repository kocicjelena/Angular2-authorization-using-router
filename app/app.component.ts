import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, CanActivate,RouteConfig, ComponentInstruction,APP_BASE_HREF,, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS }    from 'angular2/http';
import {Component} from 'angular2/core';
import {Router, Route} from 'angular2/router';
import {Home} from './home';
import {ControlPanelCmp} from './control';
import {MyCmp} from './mycmp';
import {HeroFormComponent} from './hero-form.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a [routerLink]="['Home']">Home</a> |
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
  ]
})
@RouteConfig([
 
    {path: '/user-settings/setings', component: MyCmp, name: 'MyCmp'},
   {path: '/user-settings/:id', component: ControlPanelCmp, name: 'ControlPanelCmp'},
  {path: '/Home', component: Home, name: 'Home'},
   {path:'/', redirectTo: ["Home"]},
   {path: '/user-settings/setings/:param', component: MyCmp, name: 'ParamCmp'},
  {path: '/Cmp', component: ControlPanelCmp, name: 'Cmp'},
  {path: '/Cmp/:name', component: ControlPanelCmp, name: 'MyCmp'},
    {path: '/FCmp/:name', component: HeroFormComponent, name: 'FCmp'},
   {path:'/user-settings/setings/1', redirectTo: ["MyCmp"]},
])
export class AppComponent {
  title = 'Tour of Routes';
   constructor(public router: Router) {
    
  }
}

