let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Peter';

if (typeof userInput === 'string') {
    userName = userInput
}

function generateError(message: string, code: number): never {
    throw {
        message: message,
        errorCode: code
    };
}

console.log(userName)

const result = generateError('An error ocurred', 404)
console.log(result)