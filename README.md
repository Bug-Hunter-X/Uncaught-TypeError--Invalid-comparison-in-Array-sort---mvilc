# Uncaught TypeError: Invalid comparison in Array.sort()

This repository demonstrates a common, yet subtle, error encountered when using the `Array.sort()` method in JavaScript and TypeScript.  The error, `Uncaught TypeError: Invalid comparison`, arises when comparing objects within an array without explicitly defining how to compare those objects.  TypeScript's type system doesn't directly catch this error, highlighting the importance of understanding how `sort` works under the hood.

The `bug.ts` file contains the problematic code.  The `bugSolution.ts` demonstrates a corrected approach.

## How to Reproduce
1. Clone this repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run the compiled JavaScript code (e.g., `node bug.js`). You will observe the error.
4. Run `tsc bugSolution.ts` and then execute the compiled javascript. This corrected version will work as expected.

## Learning Points
* Understand the implicit behavior of `Array.sort()` when comparing objects.
* Always provide a custom comparison function for object sorting to avoid unpredictable results and errors.  This comparison function should explicitly compare properties of the objects, not the objects themselves.