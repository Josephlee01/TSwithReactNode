// 추론
const names = ["Joe", "Max", "Ellie"];
console.log(names[2].split(''))

// Generics
const fruits: Array<string> = [];
fruits[0] = "Cranberry";

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 1000);
});

promise.then((data) => data.split(""));
