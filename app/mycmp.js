System.register(['angular2/core', 'angular2/router', './hero-form.component', './control'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, hero_form_component_1, control_1;
    var MyCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            },
            function (control_1_1) {
                control_1 = control_1_1;
            }],
        execute: function() {
            MyCmp = (function () {
                function MyCmp(name, _router) {
                    this._router = _router;
                    this.log = '';
                    this.name = '';
                    this.name = name;
                }
                MyCmp.prototype.routerOnActivate = function (next, prev) {
                    this.log = "Finished navigating from \"" + (prev ? prev.urlPath : 'null') + "\" to \"" + next.urlPath + "\"";
                };
                MyCmp.prototype.onKey = function (event) {
                    this.name = event.target.value;
                };
                MyCmp.prototype.gotoDetail = function (event) {
                    this.name = event.target.value;
                    var link = ['MyCmp', { name: this.name }];
                    this._router.navigate(link);
                };
                MyCmp = __decorate([
                    core_1.Component({ selector: 'my-cmp', template: "<div>routerOnActivate: {{log}}</div>  <div>\n      <h4>Hello {{name}}!</h4>\n   </div><hero-form></hero-form>", directives: [router_1.ROUTER_DIRECTIVES, control_1.ControlPanelCmp, hero_form_component_1.HeroFormComponent] }),
                    __param(0, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [String, router_1.Router])
                ], MyCmp);
                return MyCmp;
            }());
            exports_1("MyCmp", MyCmp);
        }
    }
});
//# sourceMappingURL=mycmp.js.map