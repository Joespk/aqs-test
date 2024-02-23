"use strict";
// Import the Game24Solver class
Object.defineProperty(exports, "__esModule", { value: true });
const solver_1 = require("./solver");
// Example usage
const numbers = [1, 2, 3, 4];
const solver = new solver_1.Game24Solver(numbers);
const allSolutions = solver.solve();
console.log(allSolutions);
