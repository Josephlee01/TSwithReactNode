"use strict";
const names = ["Joe", "Max", "Ellie"];
console.log(names[2].split(''));
const fruits = [];
fruits[0] = "Cranberry";
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 1000);
});
promise.then((data) => data.split(""));
