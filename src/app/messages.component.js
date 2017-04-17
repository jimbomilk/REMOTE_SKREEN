"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jimbomilk on 3/12/2017.
 */
var core_1 = require("@angular/core");
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.getMessages = function () {
        var _this = this;
        this.channel1 = this.pusher.subscribe('location2');
        this.channel1.bind('App\\Events\\MessageEvent', function (data) {
            _this.newMessage(data);
        });
        this.channel2 = this.pusher.subscribe('location2');
        this.channel2.bind('App\\Events\\SmallAdsEvent', function (data) {
            _this.newMessage(data);
        });
        this.subscribed = true;
    };
    MessagesComponent.prototype.newMessage = function (received) {
        this.messages.push(received);
        if (this.messages.length > 5) {
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
    core_1.Input()
], MessagesComponent.prototype, "pusher");
MessagesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'messages',
        templateUrl: './messages.component.html',
        styleUrls: ['./messages.component.css']
    })
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map