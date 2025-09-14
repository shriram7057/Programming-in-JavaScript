const prompt = require("prompt-sync")();

const num = prompt("Enter an integer Number :");
const digits = num.length;
let sum = 0;
let temp = parseInt(num);

while (temp > 0) 
{
    const remainder = temp % 10;
    sum += remainder ** digits;
    temp = Math.floor(temp / 10);
}

if (sum == num)
    console.log(num + " is an Armstrong number");
else
    console.log(num + " is not an Armstrong number");
