"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var common_1 = require("./common");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ name: 'email', type: 'varchar', length: 250 }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: 'password', type: 'varchar', length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ name: 'nickname', type: 'varchar', length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "nickname", void 0);
    __decorate([
        typeorm_1.Column({ name: 'isAdmin', type: 'tinyint', default: 0 }),
        __metadata("design:type", Number)
    ], User.prototype, "isAdmin", void 0);
    User = __decorate([
        typeorm_1.Entity({
            name: 'Users',
        })
    ], User);
    return User;
}(common_1.Common));
exports.User = User;
