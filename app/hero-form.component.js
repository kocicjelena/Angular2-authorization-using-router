System.register(['angular2/core', './hero', 'angular2/router', './control'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1, router_1, control_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (control_1_1) {
                control_1 = control_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent(params) {
                    this.powers = ['ReallySmart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new hero_1.Hero(1, 'name', 'username', 'pass');
                    this.submitted = false;
                    // Reset the form with a new hero AND restore 'pristine' class state
                    // by toggling 'active' flag which causes the form
                    // to be removed/re-added in a tick via NgIf
                    // TODO: Workaround until NgForm has a reset method (#6822)
                    this.active = true;
                    this.message = params.get(this.model.name);
                }
                HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                HeroFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.model = new hero_1.Hero(1, '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                HeroFormComponent.prototype.getdiagnostic = function () { console.log(JSON.stringify(this.model)); return JSON.stringify(this.model); };
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        templateUrl: 'app/hero-form.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, control_1.ControlPanelCmp]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], HeroFormComponent);
                return HeroFormComponent;
            }());
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
//# sourceMappingURL=hero-form.component.js.map