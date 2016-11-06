"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('./untils/http');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        var _self = this;
        this.imgUrl = './images/dog.png';
        window.fetch('./mock/nytimes_stories.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(http_1.status)
            .then(http_1.json)
            .then(function (response) {
            _self.stories = [];
            response.results.forEach(function (item) {
                if (item.multimedia.length > 0) {
                    item.imageUrl = item.multimedia[3].url;
                }
                else {
                    item.imageUrl = './images/dog.png';
                }
                _self.stories.push(item);
            });
            console.log(_self.stories);
        })
            .catch(function (error) {
            console.log(error.message);
        });
    }
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/stories/stories.html'
        })
    ], MyAppComponent);
    return MyAppComponent;
}());
exports.MyAppComponent = MyAppComponent;
