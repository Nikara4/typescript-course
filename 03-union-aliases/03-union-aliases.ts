type Combinable = number | string;
type Conversion = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: Conversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = `${input1.toString()}${input2.toString()}`
    }

    if (resultConversion === 'as-number') return +result;
    if (resultConversion === 'as-text') return result.toString();

    // return result;
}

const combinedAges = combine(30, 20, 'as-number');
const combinedNames = combine("Max", "Anna", 'as-text');
const combinedAny = combine("15", "88", 'as-number');

console.log(combinedAges);
console.log(combinedNames);
console.log(combinedAny)