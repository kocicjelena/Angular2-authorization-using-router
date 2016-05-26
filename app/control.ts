import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {ROUTER_DIRECTIVES, CanActivate,RouteConfig, ComponentInstruction,APP_BASE_HREF,ROUTER_PROVIDERS, CanReuse, RouteParams, OnReuseRouter, Route} from 'angular2/router';
import {Home} from './home';
import {MyCmp} from './mycmp';
function checkIfWeHavePermission(instruction: ComponentInstruction) {
  return instruction.params['id'] == '1';
}
function checkIf2HavePermission(instruction: ComponentInstruction) {
  return instruction.params['name'] == '2';
}
// #docregion canActivate
@Component({selector: 'control-panel-cmp', 
template: `<div>Settings: ...</div> <div>hello {{name}}! You have passed authorisation.</div>
    <div> </div> <a [routerLink]="['ParamCmp', {param: 1}]">Navigate to next page with only this permission Param and register</a>
   <br />
   <br /><a [routerLink]="['/MyCmp', {name: 'naomi'}]">Naomi</a> |
    <a [routerLink]="['/MyCmp', {name: 'brad'}]" id="brad-link">Brad</a>`, directives: [ROUTER_DIRECTIVES]
})



@CanActivate(checkIfWeHavePermission)
export class ControlPanelCmp implements CanReuse, OnReuse{

  constructor(params: RouteParams) { this.name = params.get('name') || 'NOBODY'; }

  routerCanReuse(next: ComponentInstruction, prev: ComponentInstruction) { return true; }

  routerOnReuse(next: ComponentInstruction, prev: ComponentInstruction) {
    this.name = next.params['name'];
  }
}


