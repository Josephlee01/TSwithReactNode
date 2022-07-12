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

const add = (a: number, b: number) => a + b;

console.log(add(2, 8));

// const printOutput = (output: string | number) => console.log(output)
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5, 2));
