"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jimbomilk on 2/7/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PageService = (function () {
    function PageService(http, config, authenticationService) {
        this.http = http;
        this.config = config;
        this.authenticationService = authenticationService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headersUrl = ''; // URL to web api
        this.headersUrl = config.getConfig('host');
    }
    PageService.prototype.getPage = function (id) {
        var url = "http://" + this.headersUrl + "/api/screen/" + id;
        return this.http.post(url, { 'token': this.authenticationService.token })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PageService = __decorate([
        core_1.Injectable()
    ], PageService);
    return PageService;
}());
exports.PageService = PageService;
