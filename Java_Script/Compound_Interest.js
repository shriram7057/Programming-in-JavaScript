function calculateInterest(principal, rate, time) {
    const interest = (principal * rate * time) / 100;
    return interest;
}

// Example usage:
const principal = 1000;
const rate = 5;   
const time = 2;        

const interest = calculateInterest(principal, rate, time);
console.log(`The interest is: ${interest}`);
