"use strict";
const add = (a, b = 1) => a + b;
console.log(add(2, 8));
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
printOutput(add(5, 2));
printOutput(add(5));
const countries = ['Guatemala', 'Peru'];
const activeCountries = ['Mexico'];
activeCountries.push(...countries);
console.log(activeCountries);
const person = {
    name: "Joseph",
    gender: "Male"
};
const copiedPerson = Object.assign(Object.assign({}, person), { age: 35 });
console.log(copiedPerson);
