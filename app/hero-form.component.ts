import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Hero }    from './hero';
import {
  CanActivate,
  RouteConfig,
  ComponentInstruction,
  APP_BASE_HREF,
  ROUTER_DIRECTIVES, Router, RouteParams
} from 'angular2/router';
import {Home} from './home';
import {ControlPanelCmp} from './control';
@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html',
  directives: [ROUTER_DIRECTIVES,ControlPanelCmp]
})
export class HeroFormComponent {
constructor(params: RouteParams) {
    this.message = params.get(this.model.name);
  }
  powers = ['ReallySmart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(1, 'name', 'username', 'pass');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newHero() {
    this.model = new Hero(1, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
  getdiagnostic() { console.log(JSON.stringify(this.model));return JSON.stringify(this.model); }
  
}
}

