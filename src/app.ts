interface Named {
  readonly name: string
}

// 두개의 interface 병합 가능
interface Greetable extends Named {

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age= 35;
  
  constructor(n:string) {
    this.name= n
  }
  // interface는 implements에 greet() 가 있어야 함을 강제함.
  greet(phrase:string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Joe")
// user1.name = 'Henry' 
// ⬆️ readonly이기 때문에 불가능

user1.greet('Hi there, ')
console.log(user1)
