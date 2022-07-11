// unknown은 any보다 제한적임.
// but 2-3개의 타입이 예상된다면 || 를 사용할 것
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
