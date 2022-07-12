"use strict";
const add = (a, b) => a + b;
console.log(add(2, 8));
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
printOutput(add(5, 2));
