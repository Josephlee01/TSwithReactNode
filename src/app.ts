// Decorator는 대문자로 시작함.
// function Logger(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }

// @Logger

// Decorator Factory
function Logger(logString: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function (constructor: any) {
    console.log('Rendering template')
    const hookElement = document.getElementById(hookId)
    const p = new constructor()
    if (hookElement) {
      hookElement.innerHTML = template
      // hookElement.querySelector('h1')!.textContent = p.name
    }
  }
}

// @Logger("LOGGING - PERSON")
@Logger('LOGGING...')
@WithTemplate('<h1>Greeting from Taipei...</h1>', 'app')
class Person {
  name = "Joe";

  constructor() {
    console.log("Creating person object...");
  }
}

const person1 = new Person();

console.log(person1);
