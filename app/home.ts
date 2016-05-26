import {Component} from 'angular2/core';
import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {
  CanActivate,
  RouteConfig,
  ComponentInstruction,
  APP_BASE_HREF,
  ROUTER_DIRECTIVES
} from 'angular2/router';

@Component({
  selector: 'home',
  templateUrl: "app/home.html",
  directives: [ROUTER_DIRECTIVES]
})

export class Home {

}

                
