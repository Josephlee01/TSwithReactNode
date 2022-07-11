// unknown은 any보다 제한적임.
// but 2-3개의 타입이 예상된다면 || 를 사용할 것

let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'
if(typeof userInput === 'string'){
  userName = userInput
} 


// never (void도 가능)
function generateError(message: string, code: number):never{
  throw {message, errorCode: code}
}

generateError('An error occurred!', 500)