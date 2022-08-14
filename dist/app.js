"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("TEMPLATE FACTORY");
    return function (constructor) {
        console.log("Rendering template");
        const hookElement = document.getElementById(hookId);
        const p = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Joe";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("LOGGING..."),
    WithTemplate("<h1>Greeting from Taipei...</h1>", "app")
], Person);
const person1 = new Person();
console.log(person1);
function Log(target, propertyName) {
    console.log("property Decorator");
    console.log(target, propertyName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invaild price: Price should be bigger than 0");
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
