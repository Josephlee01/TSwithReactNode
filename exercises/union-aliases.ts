type Combinable = number|string;
type Conversion = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: Conversion
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number")
   {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result

  // if (resultConversion==="as-number"){
  //   return +result // result를 정수형(int)으로 변환
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 35, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "35", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
