var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('./http');
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
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgStyle],
            templateUrl: './app/stories/stories.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
