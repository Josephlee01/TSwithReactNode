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

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Joe", hobbies: ["Sports"] }, { age: 35 });
console.log(mergedObj.name);
console.log(mergedObj.hobbies);

interface Length {
  length: number;
}

function countAndDescribe<T extends Length>(element: T): [T, string] {
  let descText = "Got no value.";
  if (element.length === 1) {
    descText = `Got 1 element.`;
  } else if (element.length > 1) {
    descText = `Got ${element.length} elements.`;
  }
  return [element, descText];
}

console.log(countAndDescribe(["Joseph", "Mike"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

const joe = extractAndConvert({ name: "Joe" }, "name");
console.log(joe)