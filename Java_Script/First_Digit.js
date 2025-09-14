function findFirstDigit(num) {
    while (num >= 10) {
        num = (num  / 10);
    }
    return num;
}

// Example usage:
let number = 91709;
console.log(Math.round(findFirstDigit(number)));  // Output: 4
