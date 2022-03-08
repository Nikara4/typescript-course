var userInput;
var userName;
userInput = 5;
userInput = 'Peter';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
console.log(userName);
var result = generateError('An error ocurred', 404);
console.log(result);
