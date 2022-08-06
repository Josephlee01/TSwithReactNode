"use strict";
const names = ["Joe", "Max", "Ellie"];
console.log(names[2].split(""));
const fruits = [];
fruits[0] = "Cranberry";
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 1000);
});
promise.then((data) => data.split(""));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Joe", hobbies: ["Sports"] }, { age: 35 });
console.log(mergedObj.name);
console.log(mergedObj.hobbies);
function countAndDescribe(element) {
    let descText = "Got no value.";
    if (element.length === 1) {
        descText = `Got 1 element.`;
    }
    else if (element.length > 1) {
        descText = `Got ${element.length} elements.`;
    }
    return [element, descText];
}
console.log(countAndDescribe(['Joseph', "Mike"]));
