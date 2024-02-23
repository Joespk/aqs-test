"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solver_1 = require("../ultis/solver");
describe("Game24Solver", () => {
    it("should return solutions for numbers [1, 2, 3, 4]", () => {
        const numbers = [1, 2, 3, 4];
        const solver = new solver_1.Game24Solver(numbers);
        const solutions = solver.solve();
        expect(solutions.length).toBeGreaterThan(0);
    });
    it("should return solutions for numbers [2, 3, 4, 5]", () => {
        const numbers = [2, 3, 4, 5];
        const solver = new solver_1.Game24Solver(numbers);
        const solutions = solver.solve();
        expect(solutions.length).toBeGreaterThan(0);
    });
    it("should return solutions for numbers [6, 4, 2, 3]", () => {
        const numbers = [6, 4, 2, 3];
        const solver = new solver_1.Game24Solver(numbers);
        const solutions = solver.solve();
        expect(solutions.length).toBeGreaterThan(0);
    });
    it("should return no solution for invalid input [1, 1, 1, 1]", () => {
        const numbers = [1, 1, 1, 1]; // Can't form 24
        const solver = new solver_1.Game24Solver(numbers);
        const solution = solver.solve();
        expect(solution).toEqual("No solution found.");
    });
});
