function findQuotient(dividend, divisor) 
{
    return parseInt(dividend / divisor);
}

function findRemainder(dividend, divisor) 
{
    return dividend % divisor;
}

let quotient = findQuotient(15, 3);
let remainder = findRemainder(15, 3);

console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
