const prompt = require("prompt-sync")();
function factorial(n) {
  if (n < 0) {
    return "number has to be positive.";
  }

  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    return n * factorial(n - 1);
  }
}
let n = 4;
answer = factorial(n);
console.log("Factorial of " + n + " : " + answer);
// Factroil of 4 is :24
