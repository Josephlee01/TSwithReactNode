// type 사용 시

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface 사용 시
// interface Admin {
//   name: string;
//   privileges: string[];
// };

// interface Employee {
//   name: string;
//   startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: "Joe",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: string, b:string): string
function add(a: string, b:number): string
function add(a: number, b:string): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Hello', ' buddy')
console.log(result.split(' '))  

type UnKnownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnKnownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const car1 = new Car();
const car2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(car1);
useVehicle(car2);

//using interface
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

const paragraph = <HTMLParagraphElement>(
  document.getElementById("message-output")
);
// react jsx와 충돌 가능성 있음. so,
const userInputElement = document.getElementById(
  "user-input"!
) as HTMLInputElement;

userInputElement.placeholder = "Input Value here";

// 뭐가 올지는 모르지만 무조건 string이어야 함.
interface ErrorBag {
  [key: string]: string;
}

const errorbag: ErrorBag = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
}


const fetchedUserData = {
  id: 'u1',
  name:'Joe',
  // job: {title: 'CEO', desc: "My Own Company"}
}

console.log(fetchedUserData?.job?.title)