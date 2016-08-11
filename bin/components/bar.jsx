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
const component_1 = require('../common/component/component');
const mobx_inferno_1 = require('mobx-inferno');
let Bar = class Bar extends component_1.default {
    constructor(props) {
        super(props);
    }
    componentStyle() {
        return {
            background: 'green'
        };
    }
    render() {
        return (<div class={this.style}>
        <div>
          <div>PMENU</div>
          <div>STRUCTURE</div>
          <div>ADD</div>
        </div>
        <div open={this.props.children.length > 0}>{this.props.children}</div>
      </div>);
    }
};
Bar = __decorate([
    mobx_inferno_1.observer, 
    __metadata('design:paramtypes', [Object])
], Bar);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bar;
//# sourceMappingURL=bar.jsx.map