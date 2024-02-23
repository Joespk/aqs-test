"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game24Solver = void 0;
class Game24Solver {
    constructor(numbers) {
        this.numbers = numbers;
    }
    solve() {
        const solutions = [];
        const find24 = (numbers) => {
            if (numbers.length !== 4) {
                throw new Error("Input must contain exactly 4 numbers.");
            }
            // Check if any number is 0
            if (numbers.includes(0)) {
                throw new Error("Numbers cannot contain 0.");
            }
            const operators = ["+", "-", "*", "/"];
            // Function to evaluate expressions without using eval
            const evaluate = (a, b, op) => {
                switch (op) {
                    case "+":
                        return a + b;
                    case "-":
                        return a - b;
                    case "*":
                        return a * b;
                    case "/":
                        return a / b;
                    default:
                        throw new Error("Invalid operator");
                }
            };
            // Recursive function to find all possible expressions
            const getExpressions = (numbers) => {
                if (numbers.length === 1) {
                    if (Math.abs(numbers[0] - 24) < 0.0001) {
                        return [numbers[0].toString()];
                    }
                    return [];
                }
                const expressions = [];
                for (let i = 0; i < numbers.length; i++) {
                    for (let j = i + 1; j < numbers.length; j++) {
                        const remaining = [
                            ...numbers.slice(0, i),
                            ...numbers.slice(i + 1, j),
                            ...numbers.slice(j + 1),
                        ];
                        for (const op of operators) {
                            if (op === "/" && numbers[j] === 0)
                                continue; // Avoid division by zero
                            try {
                                const result = evaluate(numbers[i], numbers[j], op);
                                const subExpressions = getExpressions([...remaining, result]);
                                for (const subExp of subExpressions) {
                                    expressions.push(`(${numbers[i]}${op}${numbers[j]})${subExp}`);
                                }
                            }
                            catch (error) {
                                // Ignore errors due to invalid operations
                            }
                        }
                    }
                }
                return expressions;
            };
            const expressions = getExpressions(numbers);
            if (expressions.length === 0) {
                return "No solution found.";
            }
            else {
                return expressions;
            }
        };
        const solutionsOrError = find24(this.numbers);
        if (Array.isArray(solutionsOrError)) {
            return solutionsOrError;
        }
        else {
            throw new Error(solutionsOrError);
        }
    }
}
exports.Game24Solver = Game24Solver;
