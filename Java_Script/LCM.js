const prompt = require("prompt-sync")();
var hcf;

const num1 = prompt('Enter a first integer: ');
const num2 = prompt('Enter a second integer: ');

while(num1 != num2){
    if(num1 > num2) 
        num1 -= num2;
    else 
        num2 -= num1;
}
hcf = num1; 
// find LCM
let lcm = (num1 * num2) / hcf;

console.log("LCM of the two numbers is ", lcm);