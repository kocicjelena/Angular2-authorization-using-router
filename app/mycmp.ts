import {Component, Attribute} from 'angular2/core';
import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {
  CanActivate,
  RouteConfig,
  ComponentInstruction,
  APP_BASE_HREF,
  ROUTER_DIRECTIVES, Router
} from 'angular2/router';
import {HeroFormComponent} from './hero-form.component';
import {Home} from './home';
import {ControlPanelCmp} from './control';
@Component({selector: 'my-cmp', template: `<div>routerOnActivate: {{log}}</div>  <div>
      <h4>Hello {{name}}!</h4>
   </div><hero-form></hero-form>`, directives: [ROUTER_DIRECTIVES,ControlPanelCmp, HeroFormComponent]})
export class MyCmp implements OnActivate {
 constructor(@Attribute('name') name: string,  private _router: Router,) { this.name = name; } 
  log: string = '';
  name:string = '';
  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    this.log = `Finished navigating from "${prev ? prev.urlPath : 'null'}" to "${next.urlPath}"`;
  }
  onKey(event:any) {
    this.name = event.target.value ;
  }
   gotoDetail(event:any) {
    this.name = event.target.value ;
    let link = ['MyCmp', { name: this.name }];
    this._router.navigate(link);
  }
}

                
