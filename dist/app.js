"use strict";
let user1;
user1 = {
    name: "Joe",
    age: 35,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    },
};
user1.greet('Hi there, ');
