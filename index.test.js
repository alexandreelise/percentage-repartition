const percentageRepartition = require("./index.js");

console.log("Start tests");

const resultOne = percentageRepartition();
console.log("Test 1: default arguments : actual results :", resultOne);

const maxTotalTwo = 100;
let dataTwo = [
    [10, 1, 1],
    [25, 1, 0],
    [0, 1, 1],
    [4, 1, 0]
];

const resultTwo = percentageRepartition(maxTotalTwo, dataTwo);

console.log("Test 2: integer arguments pair number of elements,actual result", resultTwo);

const maxTotalThree = 100;
let dataThree = [
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 1]
];
let resultThree;
try {
    resultThree = percentageRepartition(maxTotalThree, dataThree);
    console.log("Test 3: Edge case 1: integer arguments impair number of elements,actual result", resultThree);
} catch (e) {
    if (e.message == "Logic error cannot split percentage to get exactly 100% with the provided arguments. Please set at least one value to be unchanged for impair number of elements in your provided dataset") {
        console.log("Test 3: Edge case 1: integer arguments impair number of elements,actual result", resultThree);
    } else {
        throw new Error("Edge case 1 is not processed correctly. Test failed.");
    }
}
const maxTotalFour = 25;
let dataFour = [
    [0, 1, 1],
    [0, 0.5, 1],
    [0, 1, 1]
];

const resultFour = percentageRepartition(maxTotalFour, dataFour);

console.log("Test 4: Edge case 2: maxTotal less than 100 and maxTotal is impair,actual result", resultFour);
console.log("End tests");
