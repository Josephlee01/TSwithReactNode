// Decorator는 대문자로 시작함.
// function Logger(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }

// @Logger'

// Decorator Factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
@Logger("LOGGING - PERSON")
class Person {
  name = "Joe";

  constructor() {
    console.log("Creating person object...");
  }
}

const person1 = new Person();

console.log(person1);
