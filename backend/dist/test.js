"use strict";
function generateAllOperations(numbers) {
    const results = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                const expression = `(${numbers[0]}${getOperator(i)}${numbers[1]})${getOperator(j)}(${numbers[2]}${getOperator(k)}${numbers[3]})`;
                try {
                    const result = eval(expression);
                    if (Number.isFinite(result) && result === 24) {
                        results.push(expression);
                    }
                }
                catch (error) {
                    console.error(`Error evaluating expression ${expression}: ${error}`);
                }
            }
        }
    }
    return results;
}
function getOperator(index) {
    switch (index) {
        case 0:
            return "+";
        case 1:
            return "-";
        case 2:
            return "*";
        case 3:
            return "/";
        default:
            throw new Error("Invalid operator index");
    }
}
// Example usage
const numbers = [9, 2, 3, 4];
const allOperations = generateAllOperations(numbers);
console.log(allOperations);
