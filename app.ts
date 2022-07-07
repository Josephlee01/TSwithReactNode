function add(n1: number, n2: number) {
  return n1 + n2;
}

// function 에 return하는 것이 없다면 ts는 void로 추론함. but 명시적으로 void 표시해주는 것이 좋음.
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));
