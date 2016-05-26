System.register(['angular2/core', 'angular2/router', './home', './control', './mycmp', './hero-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, home_1, control_1, mycmp_1, hero_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (control_1_1) {
                control_1 = control_1_1;
            },
            function (mycmp_1_1) {
                mycmp_1 = mycmp_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.title = 'Tour of Routes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n    <a [routerLink]=\"['Home']\">Home</a> |\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/user-settings/setings', component: mycmp_1.MyCmp, name: 'MyCmp' },
                        { path: '/user-settings/:id', component: control_1.ControlPanelCmp, name: 'ControlPanelCmp' },
                        { path: '/Home', component: home_1.Home, name: 'Home' },
                        { path: '/', redirectTo: ["Home"] },
                        { path: '/user-settings/setings/:param', component: mycmp_1.MyCmp, name: 'ParamCmp' },
                        { path: '/Cmp', component: control_1.ControlPanelCmp, name: 'Cmp' },
                        { path: '/Cmp/:name', component: control_1.ControlPanelCmp, name: 'MyCmp' },
                        { path: '/FCmp/:name', component: hero_form_component_1.HeroFormComponent, name: 'FCmp' },
                        { path: '/user-settings/setings/1', redirectTo: ["MyCmp"] },
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map