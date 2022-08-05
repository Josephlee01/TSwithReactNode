// 추론
const names = ["Joe", "Max", "Ellie"];
console.log(names[2].split(""));

// Generics
const fruits: Array<string> = [];
fruits[0] = "Cranberry";

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 1000);
});

promise.then((data) => data.split(""));

function merge<T,U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Joe", hobbies: ['Sports'] }, { age: 35 });
console.log(mergedObj.name)
console.log(mergedObj.hobbies)