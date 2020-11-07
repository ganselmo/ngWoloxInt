"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TechService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TechService = /** @class */ (function () {
    function TechService(http) {
        var _this = this;
        this.http = http;
        this.baseTechs = new rxjs_1.BehaviorSubject([]);
        this.filteredTechs = new rxjs_1.BehaviorSubject([]);
        this.likedTechsCount = new rxjs_1.BehaviorSubject(0);
        this.likedTechs = this.getLiked();
        this.initTechs().then(function (data) {
            _this.baseTechs.next(data);
            _this.filteredTechs.next(data.map(function (el) {
                el.liked = _this.likedTechs.includes(el.tech);
                return el;
            }));
        });
    }
    ;
    TechService.prototype.destroy = function () {
        this.likedTechs = [];
        localStorage.setItem('likedTechs', '[]');
    };
    TechService.prototype.initTechs = function () {
        return this.http.get('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs').toPromise();
    };
    TechService.prototype.getTechs = function () {
        return this.filteredTechs;
    };
    TechService.prototype.filter = function (filters) {
        var result = this.baseTechs.value;
        filters.forEach(function (filter) {
            result = result.filter(function (element) {
                return element[filter.field].toLowerCase().includes(filter.value.toLowerCase());
            });
        });
        this.filteredTechs.next(result);
    };
    TechService.prototype.sortAsc = function (field) {
        var result = this.filteredTechs.value;
        result.sort(function (a, b) {
            if (a[field].toLowerCase() > b[field].toLowerCase()) {
                return 1;
            }
            if (a[field].toLowerCase() < b[field].toLowerCase()) {
                return -1;
            }
            return 0;
        });
        this.filteredTechs.next(result);
    };
    TechService.prototype.getLiked = function () {
        var likedTechsString = localStorage.getItem('likedTechs');
        var likedArray = JSON.parse(likedTechsString);
        if (likedArray != null) {
            this.likedTechsCount.next(likedArray.length);
        }
        else {
            likedArray = [];
        }
        return likedArray;
    };
    TechService.prototype.saveLike = function (tech) {
        this.likedTechs.push(tech);
        this.saveLiked();
    };
    TechService.prototype.deleteLike = function (tech) {
        var index = this.likedTechs.indexOf(tech);
        if (index !== -1) {
            this.likedTechs.splice(index, 1);
        }
        this.saveLiked();
    };
    TechService.prototype.getLikedTechsCount = function () {
        return this.likedTechsCount;
    };
    TechService.prototype.saveLiked = function () {
        this.likedTechsCount.next(this.likedTechs.length);
        localStorage.setItem('likedTechs', JSON.stringify(this.likedTechs));
    };
    TechService.prototype.sortDesc = function (field) {
        var result = this.filteredTechs.value;
        result.sort(function (a, b) {
            if (a[field].toLowerCase() > b[field].toLowerCase()) {
                return -1;
            }
            if (a[field].toLowerCase() < b[field].toLowerCase()) {
                return 1;
            }
            return 0;
        });
        this.filteredTechs.next(result);
    };
    TechService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TechService);
    return TechService;
}());
exports.TechService = TechService;
