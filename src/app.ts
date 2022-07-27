// type addFn = (a: number, b: number) => number;
interface addFn {
  (a: number, b: number): number;
}

let add: addFn;

add = (n1, n2) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

// 두개의 interface 병합 가능
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 35;

  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }
  // interface는 implements에 greet() 가 있어야 함을 강제함.
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Joe");
// user1.name = 'Henry'
// ⬆️ readonly이기 때문에 불가능

user1.greet("Hi there, ");
console.log(user1);
