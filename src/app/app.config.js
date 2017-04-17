"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jimbomilk on 2/10/2017.
 */
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var EnvData = (function () {
    function EnvData() {
    }
    return EnvData;
}());
var AppConfig = (function () {
    function AppConfig(http) {
        this.http = http;
        this.config = null;
        this.env = null;
    }
    /**
     * Use to get the data found in the second file (config file)
     */
    AppConfig.prototype.getConfig = function (key) {
        return this.config[key];
    };
    /**
     * Use to get the data found in the first file (env file)
     */
    AppConfig.prototype.getEnv = function (key) {
        return this.env[key];
    };
    AppConfig.prototype.getHost = function () {
        return 'http://' + this.getConfig('host');
    };
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    AppConfig.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('env.json').map(function (res) { return res.json(); })["catch"](function (error) {
                console.log('Configuration file "env.json" could not be read');
                resolve(true);
                return Rx_1.Observable["throw"](error.json().error || 'Server error');
            }).subscribe(function (envResponse) {
                _this.env = envResponse;
                var request = null;
                switch (envResponse.env) {
                    case 'production':
                        {
                            request = _this.http.get('config.' + envResponse.env + '.json');
                        }
                        break;
                    case 'development':
                        {
                            request = _this.http.get('config.' + envResponse.env + '.json');
                        }
                        break;
                    case 'default':
                        {
                            console.error('Environment file is not set or invalid');
                            resolve(true);
                        }
                        break;
                }
                if (request) {
                    request
                        .map(function (res) { return res.json(); })["catch"](function (error) {
                        console.error('Error reading ' + envResponse.env + ' configuration file');
                        resolve(error);
                        return Rx_1.Observable["throw"](error.json().error || 'Server error');
                    })
                        .subscribe(function (responseData) {
                        _this.config = responseData;
                        resolve(true);
                    });
                }
                else {
                    console.error('Env config file "env.json" is not valid');
                    resolve(true);
                }
            });
        });
    };
    return AppConfig;
}());
AppConfig = __decorate([
    core_1.Injectable()
], AppConfig);
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map