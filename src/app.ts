interface Greetable {
  name: string;
  
  // interface는 implements에 greet() 가 있어야 함을 강제함.
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age= 35;

  constructor(n:string) {
    this.name= n
  }
  greet(phrase:string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Joe")

user1.greet('Hi there, ')
console.log(user1)
