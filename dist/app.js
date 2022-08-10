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
console.log(countAndDescribe(["Joseph", "Mike"]));
function extractAndConvert(obj, key) {
    return obj[key];
}
const joe = extractAndConvert({ name: "Joe" }, "name");
console.log(joe);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Joe");
textStorage.addItem("Max");
textStorage.addItem("Phil");
textStorage.removeItem("Max");
console.log(textStorage.getItem());
const numberStorage = new DataStorage();
function createCourseGoal(title, desc, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const buddies = ['Joe', 'Sam'];
