webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Sticky footer styles\r\n-------------------------------------------------- */\r\nhtml {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nbody\r\n{\r\n    background-color: #000000;\r\n    overflow: hidden;\r\n}\r\n\r\n.app{\r\n    position: absolute;\r\n    top: 0;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n    height: 80%;\r\n    width: 100%;\r\n    background-color: #000000;\r\n    margin: 0;\r\n}\r\n\r\n.header{\r\n    background-color: #000;\r\n    height:20%;\r\n}\r\n\r\n.header_left\r\n{\r\n    float:left;\r\n}\r\n.header_right\r\n{\r\n    float:right;\r\n}\r\n\r\n\r\n#contenido{\r\n    padding: 0;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\n\r\n#fullscreen\r\n{\r\n  /* Full height */\r\n  height: 100%;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n\r\n}\r\n\r\n#footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    /* Set the fixed height of the footer here */\r\n    height: 20%;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n    background-color: #000000;\r\n}\r\n\r\n\r\n\r\n.wrap\r\n{\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 99;\r\n}\r\n\r\np.form-title\r\n{\r\n  font-family: 'Open Sans' , sans-serif;\r\n  font-size: 5.5rem;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n  margin-top: 2%;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  padding-top: 20px;\r\n\r\n}\r\n\r\n.form-subtitle\r\n{\r\n    font-family: 'Open Sans' , sans-serif;\r\n    font-size: 4.75rem;\r\n    font-weight: 600;\r\n    color: #FFFFFF;\r\n    margin-top: 0;\r\n    letter-spacing: 2px;\r\n    padding-left: 30px;\r\n}\r\n\r\n.options\r\n{\r\n    font-family: 'Open Sans' , sans-serif;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 4px;\r\n}\r\n.imginfo\r\n{\r\n  border: 10px solid #fff;\r\n}\r\n.option_desc\r\n{\r\n  position:relative;\r\n  top:0px;\r\n  color:rgba(243,243,243,.8);\r\n  font-family:Verdana;\r\n  font-size:2.5em;\r\n  font-stretch: expanded;\r\n  font-weight: bold;\r\n  background-color:rgba(0,0,0,.6);\r\n  padding:.1em 0 ;\r\n}\r\n\r\n.thanks\r\n{\r\n  font-size: 3em;\r\n}\r\n\r\n.colorido\r\n{\r\n  color: #ff0;\r\n}\r\n/*-- User Widget --*/\r\n#option-widget {\r\n    background-color: transparent;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n#option-widget .img-circle {\r\n    height: 180px;\r\n    width: 180px;\r\n    padding: 8px;\r\n    border: 2px solid #fff;\r\n    margin-right: 10px;\r\n}\r\n\r\n.video-container {\r\n  position:relative;\r\n  padding-top:30px;\r\n  padding-bottom: 38%;\r\n  height:0;\r\n  overflow:hidden;\r\n}\r\n\r\n.video-container iframe, .video-container object, .video-container embed {\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n}\r\n\r\n\r\n.even{\r\n    float: right;\r\n}\r\n\r\n.odd{\r\n    float:left;\r\n}\r\n\r\n\r\n.adv{\r\n  width: 100%;\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n}\r\n.adstext1{\r\n\r\n  text-align: center;\r\n  font-size: 5em;\r\n\r\n}\r\n\r\n.adstext2{\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  font-size: 5em;\r\n}\r\n\r\n.weather{\r\n  max-height: 80%;\r\n}\r\n.qr{\r\n  float:left;\r\n  height: 100%;\r\n  width: 9%;\r\n}\r\n.messages{\r\n  height: 100%;\r\n  margin: 0px;\r\n}\r\n\r\n.location{\r\n    color:#000000;\r\n    font-size: 1.8em;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    height: 20%;\r\n    margin: 0px;\r\n    line-height: 0.8em;\r\n    background-color: #ffffff;\r\n\r\n}\r\n\r\n.blink_me {\r\n  -webkit-animation: blinker 1s linear infinite;\r\n          animation: blinker 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes blinker {\r\n  50% { opacity: 0; }\r\n}\r\n\r\n@keyframes blinker {\r\n  50% { opacity: 0; }\r\n}\r\n\r\n.vertical-center {\r\n  min-height: 50%;  /* Fallback for browsers do NOT support vh unit */\r\n  min-height: 50vh; /* These two lines are counted as one :-)       */\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n/* RANKING */\r\n.ranking{\r\n  color: #ffffff;\r\n  font-size: 2.5em;\r\n  text-align: center;\r\n  font-weight: 600;\r\n\r\n}\r\n.event-list {\r\n  list-style: none;\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n.event-list > li {\r\n  background-color: rgb(255, 255, 255);\r\n  box-shadow: 0px 0px 5px rgb(51, 51, 51);\r\n  box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\r\n  padding: 0px;\r\n  margin: 0px 0px 20px;\r\n}\r\n.event-list > li > #rank {\r\n  display: inline-block;\r\n  width: 100%;\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgb(197, 44, 102);\r\n  padding: 5px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n.event-list > li:nth-child(even) > #rank {\r\n  background-color: rgb(165, 82, 167);\r\n}\r\n.event-list > li > #rank > span {\r\n  display: none;\r\n}\r\n.event-list > li > #rank > .ranknumber {\r\n  display: block;\r\n  font-size: 56pt;\r\n  font-weight: 100;\r\n  line-height: 1;\r\n}\r\n.event-list > li > img {\r\n  width: 100%;\r\n}\r\n.event-list > li > .info {\r\n  padding-top: 5px;\r\n  text-align: center;\r\n}\r\n.event-list > li > .info > .title {\r\n  font-size: 17pt;\r\n  font-weight: 700;\r\n  margin: 0px;\r\n}\r\n.event-list > li > .info > .desc {\r\n  font-size: 13pt;\r\n  font-weight: 300;\r\n  margin: 0px;\r\n}\r\n.event-list > li > .info > ul{\r\n  display: table;\r\n  list-style: none;\r\n  margin: 10px 0px 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.event-list > li > .info > ul > li {\r\n  display: table-cell;\r\n  cursor: pointer;\r\n  color: rgb(30, 30, 30);\r\n  font-size: 11pt;\r\n  font-weight: 300;\r\n  padding: 3px 0px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .event-list > li {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 80px;\r\n    padding: 0px;\r\n  }\r\n  .event-list > li > #rank,\r\n  .event-list > li > img  {\r\n    display: inline-block;\r\n  }\r\n  .event-list > li > #rank,\r\n  .event-list > li > img {\r\n    width: 80px;\r\n    float: left;\r\n  }\r\n  .event-list > li > .info {\r\n    background-color: #000000;\r\n    overflow: hidden;\r\n  }\r\n  .event-list > li > #rank,\r\n  .event-list > li > img {\r\n    width: 80px;\r\n    height: 80px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n  }\r\n  .event-list > li > .info {\r\n    position: relative;\r\n    height: 80px;\r\n    text-align: left;\r\n    padding-right: 40px;\r\n  }\r\n  .event-list > li > .info > .title,\r\n  .event-list > li > .info > .desc {\r\n    padding: 0px 10px;\r\n  }\r\n  .event-list > li > .info > ul {\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: 0px;\r\n  }\r\n\r\n\r\n  .background {\r\n    background-color: #000000;\r\n    opacity: 0.75;\r\n  }\r\n\r\n  .background text{\r\n    color: #FFFFFF;\r\n  }\r\n\r\n  .text_msg{\r\n    color: #fff;\r\n\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"app\">\n  <div class=\"header\">\n    <div class=\"row\" >\n      <div class=\"col-md-2\">\n          <img class=\"img-responsive\" width=\"100%\" style=\"padding-top: 30px\" src=\"./assets/images/logo_modern_big_white.png\"  alt=\"Addmeetoo logo\">\n      </div>\n\n      <div class=\"col-md-8\" >\n        <p class=\"form-title\"  style=\"padding-top: 0px\">{{screeny?.headerMain}}</p>\n      </div>\n      <div class=\"col-md-2\">\n        <img class=\"img-responsive header_right\" src=\"{{screeny?.logo1}}\" style=\"padding-top: 30px\" height=\"100%\" width=\"100%\">\n      </div>\n    </div>\n  </div>\n\n  <div id=\"contenido\">\n\n\n    <div id=\"fullscreen\" [ngStyle]= \"{'background-image':'url(' + backImg + ')'}\" >\n\n      <div *ngIf=\"showInfo\" style=\"height: 100%;\">\n        <div class=\"row\" style=\"width: 99%;height:10%;margin: 0px;\">\n          <div class=\"col-md-5\" [ngStyle] = \"{'padding-top':'20px','display': + screeny?.image?'block':'none'}\" >\n            <img  class=\"img-responsive imginfo\" width=\"100%\" src=\"{{screeny?.image}}\">\n          </div>\n          <div  [ngClass]=\"[screeny?.image?'col-md-7':'col-md-12']\" style=\"margin-top: 20px;   \" >\n            <div class=\"text_msg\"><div #dataContainer></div></div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"showScreen\" style=\"height: 100%\">\n        <div class=\"row\" style=\"width: 100%;height:10%;margin: 0px\">\n          <div class=\"col-md-12\" style=\"text-align: center\">\n            <p  class=\"form-subtitle\" >{{screeny?.headerSub}}</p>\n          </div>\n\n        </div>\n        <!-- Options -->\n        <div *ngIf=\"typeOptions\" >\n\n              <div *ngFor=\"let option of screeny?.body\" style=\"text-align: center\">\n                <div [className]='col_mode' style=\"position: relative;height:260px;  text-align:center;\">\n                  <p class=\"option_desc\">{{option.description}}<span *ngIf=\"finalizado\">-{{option.result}}</span></p>\n                  <img width=\"400px\" height=\"300px\" [src]='option.image'>\n\n                </div>\n\n              </div>\n\n\n        </div>\n\n\n\n\n        <!-- Chart -->\n        <div *ngIf=\"typeChart\" class=\"vertical-center\" style=\"float: left;width: 100%\">\n\n          <google-chart [data]=\"columnChartOptions\" style=\"width: 100%\"></google-chart>\n\n        </div>\n\n        <!-- Chart -->\n        <div *ngIf=\"typeRanking\" class=\"container ranking\">\n\n          <div class=\"row\">\n            <div *ngFor=\"let usergame of  getbody(screeny?.body)\"   class=\"col-lg-6\">\n                <ul class=\"event-list\">\n                  <li>\n                    <div id=\"rank\">\n                      <span class=\"ranknumber\">{{usergame.order}}</span>\n                    </div>\n                    <img alt=\"photo\" src={{usergame.image}} />\n                    <div class=\"info\">\n                      <h2 class=\"title\">{{usergame.description}}</h2>\n                      <p class=\"desc\">{{usergame.result}}</p>\n                    </div>\n\n                  </li>\n                </ul>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n\n      <div *ngIf=\"showAds\" class=\"adv\" style=\"height: 100%\">\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n              <p class=\"adstext1\">\n                  {{screeny?.stext}}\n              </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <p class=\"adstext2\">\n                  {{screeny?.ltext}}\n              </p>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n</div>\n\n\n\n<footer id=\"footer\">\n  <div class = \"qr\">\n    <div *ngIf=\"qrcode\" style=\"text-align: center\">\n      <img class=\"img-responsive\" src=\"./assets/images/qr.png\">\n    </div>\n\n    <div *ngIf=\"weather\">\n      <img src=\"https://www.tiempo.com/wimages/fotoc65ea85523152adabb3c095abd1a59f6.png\" >\n    </div>\n    <div class=\"location\"> <span class=\"blink_me\">QR Descarga</span></div>\n  </div>\n  <messages [pusher]=\"pusher\"></messages>\n</footer>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_keepAliveService__ = __webpack_require__("../../../../../src/services/keepAliveService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(config, elementRef, keepAliveServ) {
        this.config = config;
        this.elementRef = elementRef;
        this.keepAliveServ = keepAliveServ;
        this.colClass = "6";
        this.isMessage = false;
        this.showAds = false;
        this.showScreen = false;
        this.showInfo = true;
        this.finalizado = false;
        this.typeOptions = false;
        this.typeChart = false;
        this.typeRanking = false;
        this.qrcode = false;
        this.weather = true;
        this.isVideo = false;
        //public host;
        this.columnChartOptions = {
            chartType: 'ColumnChart',
            dataTable: [
                ['', '', ''],
                ['', 0, 0],
            ],
            options: {
                width: '100%',
                height: '500',
                animation: {
                    startup: true,
                    duration: 1000,
                    easing: 'out',
                },
                title: 'Participation'
            }
        };
        this.pusher = new Pusher('9931344a99d006ebf67d', {
            cluster: 'eu'
        });
        //this.host = this.config.getConfig('host_images');
    }
    AppComponent.prototype.getBackImage = function () {
        if (this.showAds) {
            this.backImg = this.screeny.logo2;
        }
        else if (this.showInfo) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_util_util__["a" /* isDefined */])(this.screeny.background) && this.screeny.background !== null && this.screeny.background !== "")
                this.backImg = this.screeny.background;
            else
                this.backImg = '';
        }
        else if (this.showScreen) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_util_util__["a" /* isDefined */])(this.screeny.background) && this.screeny.background !== null && this.screeny.background !== "")
                this.backImg = this.screeny.background;
            else
                this.backImg = './assets/images/' + this.screeny.category + '.jpg';
        }
    };
    AppComponent.prototype.loadData = function (data) {
        this.dataContainer.nativeElement.innerHTML = data;
    };
    AppComponent.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    AppComponent.prototype.getbody = function (val) {
        if (val)
            return JSON.parse(val);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var location = 'location1';
        if (this.config.config != null) {
            location = this.config.getConfig('location');
            if (!location || location == '')
                location = 'location1';
        }
        this.subscribeToChannel(location);
        this.loadData("");
        this.showAds = false;
        this.showScreen = false;
        this.showInfo = false;
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (this.showInfo && this.screeny && !this.isMessage) {
            this.loadData(this.screeny.ltext);
        }
    };
    AppComponent.prototype.subscribeToChannel = function (location) {
        var _this = this;
        if (this.pusher) {
            this.channel1 = this.pusher.subscribe(location);
            this.channel1.bind('App\\Events\\ScreenEvent', function (data) {
                _this.newScreen(data.screen);
                _this.getBackImage();
                _this.isMessage = false;
            });
            this.channel2 = this.pusher.subscribe(location);
            this.channel2.bind('App\\Events\\AdsEvent', function (data) {
                if (data.message.type == 'bigpack') {
                    _this.newAds(data.message);
                    _this.getBackImage();
                    _this.isMessage = false;
                }
                else if (data.message.type == 'info') {
                    _this.newInfo(data.message);
                    _this.getBackImage();
                    _this.isMessage = false;
                }
                else
                    _this.isMessage = true;
            });
        }
    };
    AppComponent.prototype.newAds = function (screen) {
        this.showScreen = false;
        this.showAds = true;
        this.showInfo = false;
        this.screeny = screen;
        this.screeny.logo2 = screen.image;
        this.weather = true;
        this.qrcode = false;
    };
    AppComponent.prototype.newInfo = function (screen) {
        this.showScreen = false;
        this.showAds = false;
        this.showInfo = true;
        this.screeny = screen;
        this.screeny.headerMain = screen.stext;
        this.weather = true;
        this.qrcode = false;
    };
    AppComponent.prototype.newScreen = function (screen) {
        this.showScreen = true;
        this.showAds = false;
        this.showInfo = false;
        this.typeChart = false;
        this.typeRanking = false;
        this.screeny = screen;
        this.screeny.body = JSON.parse(screen.body);
        this.weather = false;
        this.qrcode = true;
        if (screen.body.length <= 4)
            this.col_mode = "col-md-" + Math.floor(12 / screen.body.length);
        else
            this.col_mode = "col-md-3";
        // Elementos comunes
        if (screen.code != '')
            this.gameId = screen.code;
        // Vemos que tipo de pantalla es
        if (screen.type == 'options') {
            this.typeOptions = true;
            this.finalizado = screen.gameboard.status >= 100;
            if (screen.body) {
                //let options = JSON.parse(screen.body);
                this.textSize = 4;
                if (this.textSize < 2)
                    this.textSize = 2;
                this.textSize += 'em';
                this.colClass = "6";
            }
        }
        else if (screen.type == 'chart') {
            this.typeOptions = false;
            this.typeChart = true;
            var values = JSON.parse(screen.stats);
            this.columnChartOptions.dataTable = values['dataSeries'].slice();
            this.columnChartOptions.options.title = "DISTRIBUCIÓN de VOTOS";
        }
        else if (screen.type == 'ranking') {
            var values_1 = JSON.parse(screen.body);
            this.typeRanking = true;
        }
    };
    AppComponent.prototype.keepAlive = function () {
        this.keepAliveServ.keepAlive(this.config.getConfig('location'))
            .subscribe(function (res) {
            //console.log(res, "Response here");
        }, function (err) {
            //console.log(err);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.keepAlive();
        }, 30000);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "dataContainer", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_keepAliveService__["a" /* keepAliveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_keepAliveService__["a" /* keepAliveService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jimbomilk on 2/10/2017.
 */



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
    AppConfig.prototype.getAPIUrl = function () {
        return "https://addmeetoo.com/api/";
    };
    AppConfig.prototype.getIP = function () {
        return this.getEnv('ip');
    };
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    AppConfig.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.request('./assets/env.json').map(function (res) { return res.json(); }).catch(function (error) {
                console.log('Configuration file "env.json" could not be read');
                resolve(true);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (envResponse) {
                _this.env = envResponse;
                var request = null;
                switch (envResponse.env) {
                    case 'production':
                        {
                            request = _this.http.get('./assets/config.' + envResponse.env + '.json');
                        }
                        break;
                    case 'development':
                        {
                            request = _this.http.get('./assets/config.' + envResponse.env + '.json');
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
                        .map(function (res) { return res.json(); })
                        .catch(function (error) {
                        console.error('Error reading ' + envResponse.env + ' configuration file');
                        resolve(error);
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppConfig);

var _a;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_component__ = __webpack_require__("../../../../../src/app/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_google_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_keepAliveService__ = __webpack_require__("../../../../../src/services/keepAliveService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function initConfig(config) {
    return function () { return config.load(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__messages_component__["a" /* MessagesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_google_charts__["Ng2GoogleChartsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_8__services_keepAliveService__["a" /* keepAliveService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"],
                useFactory: initConfig,
                deps: [__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */]],
                multi: true }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#messages\r\n{\r\n    height: 100%;\r\n}\r\n\r\n\r\n.profile-card {\r\n  background-color: #222222;\r\n  margin: 0px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.profile-info {\r\n  color: #BDBDBD;\r\n  padding: 0px;\r\n  position: relative;\r\n  margin-top: 0px;\r\n  height: auto;\r\n  background-color: #000000;\r\n  opacity:0.4;\r\n}\r\n\r\n.message_image{\r\n    /* Full height */\r\n    height: 100%;\r\n\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.profile-info h2 {\r\n  color: #E8E8E8;\r\n  letter-spacing: 4px;\r\n  padding-bottom: 2px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.profile-info span {\r\n  display: block;\r\n  font-size: 12px;\r\n  color: #4CB493;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n\r\n/* MESSAGES */\r\n.block-text {\r\n  border-radius: 5px;\r\n  box-shadow: 0 3px 0 #aaa;\r\n  color: #626262;\r\n  font-size: 14px;\r\n  padding: 15px 18px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.img-circle {\r\n  height: 90px;\r\n  width: 90px;\r\n  border: 2px solid #fff;\r\n}\r\n\r\n.block-text a {\r\n  color: #fff;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  line-height: 21px;\r\n  text-decoration: none;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.person-text {\r\n  padding: 10px 0 0;\r\n  text-align: center;\r\n}\r\n.person-text a {\r\n  color: #ffcc00;\r\n  font-size: 16px;\r\n  margin-top: 3px;\r\n  text-decoration: underline;\r\n}\r\n.person-text i {\r\n  color: #fff;\r\n  font-family: Georgia;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"messages\" class=\"container-fluid\" style=\"margin: 0px;padding:0px\">\r\n  <div class=\"row\" style=\"height: 100%\">\r\n    <div class=\"col-12\" style=\"height:100%;padding: 0px\">\r\n        <ul class=\"list-inline\" style=\"height: 100%;width: 100%; margin:0px;\">\r\n\r\n          <li *ngFor=\"let message of messages\" style=\"width: 22%;height: 100%; margin-top:0px;margin-right:10px;padding-top: 0; padding-right: 0px;padding-left: 0px\">\r\n\r\n            <div *ngIf=\"message.type == 'smallpack'\" class=\"profile-card text-center message_image\" style=\"height: 100%;width:100%;float: left\" [ngStyle]=\"{'background-image': 'url(' + message.image + ')'}\">\r\n\r\n\r\n              <div class=\"profile-info\">\r\n\r\n                    <h2 >{{message?.stext}}<span>{{message?.ltext}}</span></h2>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"message.type == 'message'\" style=\"height: 100%;width: 100%;float: left\">\r\n              <div class=\"block-text\">\r\n                <a title=\"\" href=\"#\">¡Gracias por participar!</a>\r\n\r\n              </div>\r\n              <div class=\"person-text\">\r\n                <img class=\"img-circle\" src=\"{{(message.image)?message.image:'./assets/images/avatar.jpg'}}\">\r\n                <a title=\"\" href=\"#\">{{message?.stext}}</a>\r\n                <i> ha participado en : {{message?.ltext}}</i>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </li>\r\n        </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jimbomilk on 3/12/2017.
 */


var MessagesComponent = (function () {
    function MessagesComponent(config) {
        this.config = config;
    }
    MessagesComponent.prototype.getMessages = function () {
        var _this = this;
        var location = 'location1';
        if (this.config.config != null) {
            location = this.config.getConfig('location');
            if (!location || location == '')
                location = 'location1';
        }
        this.channel1 = this.pusher.subscribe(location);
        this.channel1.bind('App\\Events\\MessageEvent', function (data) {
            _this.newMessage(data.message);
        });
        this.channel2 = this.pusher.subscribe(location);
        this.channel2.bind('App\\Events\\AdsEvent', function (data) {
            if (data.message.type == 'smallpack')
                _this.newMessage(data.message);
        });
        this.subscribed = true;
    };
    MessagesComponent.prototype.newMessage = function (received) {
        this.messages.push(received);
        if (this.messages.length > 4) {
            this.messages.shift();
        }
    };
    MessagesComponent.prototype.ngOnInit = function () {
        this.getMessages();
        this.messages = [];
    };
    return MessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "pusher", void 0);
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'messages',
        template: __webpack_require__("../../../../../src/app/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/keepAliveService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keepAliveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by jimbomilk on 28/12/2017.
 */
var keepAliveService = (function () {
    function keepAliveService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    keepAliveService.prototype.keepAlive = function (location) {
        return this.http
            .get(this.appConfig.getAPIUrl() + ("keepAlive?locationId=" + location + "&screenId=") + this.appConfig.getConfig('ip'))
            .map(function (res) {
            return true;
        });
    };
    return keepAliveService;
}());
keepAliveService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], keepAliveService);

var _a, _b;
//# sourceMappingURL=keepAliveService.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map