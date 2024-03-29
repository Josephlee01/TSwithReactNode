"use strict";
var _a;
const e1 = {
    name: "Joe",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Hello', ' buddy');
console.log(result.split(' '));
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving truck...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo..." + amount);
    }
}
const car1 = new Car();
const car2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(car1);
useVehicle(car2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({
    type: "bird",
    flyingSpeed: 100,
});
const paragraph = (document.getElementById("message-output"));
const userInputElement = document.getElementById("user-input");
userInputElement.placeholder = "Input Value here";
const errorbag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
const fetchedUserData = {
    id: 'u1',
    name: 'Joe',
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput1 = '';
const userInput2 = null;
const storedData1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : 'DEFAULT';
const storedData2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT';
console.log(storedData1);
console.log(storedData2);
