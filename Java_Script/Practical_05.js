class Calculator {
  Add(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      // Case 1: Both are integers
      return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
      // Case 2: Both are floats or one is float and one is integer
      return a + b;
    } else {
      throw new Error("Invalid input. ");
    }
  }
}
// Testing the Calculator class
const calc = new Calculator();
console.log("Sum of two integers (5, 10):", calc.Add(5, 10));
console.log("Sum of two floats (5.5, 10.5):", calc.Add(5.5, 10.5));
console.log("Sum of one integer and one float (5, 10.5):", calc.Add(5, 10.5));
