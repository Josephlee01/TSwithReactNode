function plus(n1: number, n2: number) {
  return n1 + n2;
}

// function 에 return하는 것이 없다면 ts는 void로 추론함. but 명시적으로 void 표시해주는 것이 좋음.
function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1:number, n2:number, callback: (num: number)=>void) {
  const result = n1+n2;
  callback(result)
}

printResult(plus(5, 12));

let combineValues: (a:number, b:number) => number

combineValues = plus;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result)
})
