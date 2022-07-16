// function add(a:number,b:number){
//   let result
//   result = a+b
//   return result
// }
// console.log(result)

// Arrow Func.

// const add = (a:number,b:number) => {
//   return a+b
// }

const add = (a: number, b: number = 1) => a + b;
// 기본값은 두번째에만 설정 가능.

console.log(add(2, 8));

// const printOutput = (output: string | number) => console.log(output)
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5, 2));
printOutput(add(5));

//
const countries = ["Guatemala", "Peru", "Kenya"];
const activeCountries = ["Mexico"];

activeCountries.push(...countries);

console.log(activeCountries);

const [country1, country2, ...etc] = activeCountries;

console.log(country1, country2);
console.log(etc);

//
const person = {
  name: "Joseph",
  gender: "Male",
};

const copiedPerson = { ...person, age: 35 };

console.log(copiedPerson);
const { name: userName, gender, age } = copiedPerson;
console.log(userName, age);

//
const plus = (...nums: number[]) =>
  nums.reduce((currentResult, currentValue) => currentResult + currentValue, 0);

const addedNums = plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(addedNums);
