"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var messages_component_1 = require("./messages.component");
var AppComponent = (function () {
    function AppComponent(config) {
        this.config = config;
        this.colClass = "6";
        this.showAds = false;
        this.showScreen = true;
        this.pusher = new Pusher('9931344a99d006ebf67d', {
            cluster: 'eu'
        });
    }
    AppComponent.prototype.getbody = function (val) {
        if (val)
            return JSON.parse(val);
    };
    AppComponent.prototype.ngOnInit = function () {
        var location = this.config.getConfig('location');
        this.subscribeToChannel(location);
    };
    AppComponent.prototype.subscribeToChannel = function (location) {
        var _this = this;
        this.channel1 = this.pusher.subscribe('location2');
        this.channel1.bind('App\\Events\\ScreenEvent', function (data) {
            _this.newScreen(data.screen);
        });
        this.channel2 = this.pusher.subscribe('location2');
        this.channel2.bind('App\\Events\\BigAdsEvent', function (data) {
            _this.newAds(data.screen);
        });
        this.subscribed = true;
    };
    AppComponent.prototype.newAds = function (screen) {
        this.showScreen = false;
        this.showAds = true;
        this.screeny = screen;
        var host = this.config.getConfig('host');
        this.screeny.logo2 = 'http://' + host + this.screeny.image;
    };
    AppComponent.prototype.newScreen = function (screen) {
        this.showScreen = true;
        this.showAds = false;
        this.screeny = screen;
        var host = this.config.getConfig('host');
        this.screeny.logo1 = 'http://' + host + this.screeny.logo1;
        console.log(this.screeny.logo1);
        if (this.screeny.body) {
            var options = JSON.parse(this.screeny.body);
            JSON.parse(this.screeny.body, function (k, v) {
                console.log(k);
                return v;
            });
            this.textSize = 24 / (options.length + 1) + 'em';
            this.colClass = (options.length > 6 || options.length == 0) ? "2" : "" + (12 / options.length);
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(messages_component_1.MessagesComponent)
], AppComponent.prototype, "screeny");
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map