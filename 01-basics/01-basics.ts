function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) return `${phrase}${n1 + n2}.`;
    return console.log("End.")
}

const num1 = 5;
const num2 = 2.5;
const printResult = true;
const resultPhrase = 'Result is: ';


const result = add(num1, num2, printResult, resultPhrase);
console.log(result)