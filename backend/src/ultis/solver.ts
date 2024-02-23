export class Game24Solver {
  private readonly numbers: number[];

  constructor(numbers: number[]) {
    if (!this.allSingleDigits(numbers)) {
      throw new Error("Input must contain single-digit numbers only.");
    }

    this.numbers = numbers;
  }

  solve(): string[] {
    const solutions: string[] = [];
    const find24 = (numbers: number[]): string | string[] => {
      if (numbers.length !== 4) {
        throw new Error("Input must contain exactly 4 numbers.");
      }
      const operators: string[] = ["+", "-", "*", "/"];
      const evaluate = (a: number, b: number, op: string): number => {
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
      const getExpressions = (numbers: number[]): string[] => {
        if (numbers.length === 1) {
          if (Math.abs(numbers[0] - 24) < 0.0001) {
            return [numbers[0].toString()];
          }
          return [];
        }

        const expressions: Set<string> = new Set(); // Use Set for unique values

        for (let i = 0; i < numbers.length; i++) {
          for (let j = i + 1; j < numbers.length; j++) {
            const remaining: number[] = [
              ...numbers.slice(0, i),
              ...numbers.slice(i + 1, j),
              ...numbers.slice(j + 1),
            ];

            for (const op of operators) {
              if (op === "/" && numbers[j] === 0) continue; // Avoid division by zero
              try {
                const result = evaluate(numbers[i], numbers[j], op);
                const subExpressions = getExpressions([...remaining, result]);
                for (const subExp of subExpressions) {
                  // Add unique expressions to the Set
                  expressions.add(`(${numbers[i]}${op}${numbers[j]})${subExp}`);
                }
              } catch (error) {
                // Ignore errors due to invalid operations
              }
            }
          }
        }

        // Convert Set back to an array and return
        return Array.from(expressions);
      };

      const expressions = getExpressions(numbers);
      return expressions.length === 0 ? "No solution found." : expressions;
    };

    const solutionsOrError = find24(this.numbers);
    if (Array.isArray(solutionsOrError)) {
      return solutionsOrError;
    } else {
      throw new Error(solutionsOrError);
    }
  }

  private allSingleDigits(numbers: number[]): boolean {
    return numbers.every((number) => number > 0 && number <= 9);
  }
}
