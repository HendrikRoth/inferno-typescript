"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inferno_component_1 = require('inferno-component');
const styler_1 = require('./styler');
let StyledComponent = class StyledComponent extends inferno_component_1.default {
    constructor(props) {
        super(props);
    }
    componentStyle() {
        return {
            background: 'red'
        };
    }
    render() {
        return <div class={this.style}></div>;
    }
};
StyledComponent = __decorate([
    styler_1.styled, 
    __metadata('design:paramtypes', [Object])
], StyledComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StyledComponent;
//# sourceMappingURL=component.jsx.map