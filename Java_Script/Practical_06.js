// Creating a new Date object for demonstration
const currentDate = new Date();

console.log("Date:", currentDate); // Date()
console.log("Day of the Month:", currentDate.getDate()); // getDate()

console.log("Day of the Week (0 = Sunday):", currentDate.getDay()); // getDay()
console.log("Full Year:", currentDate.getFullYear()); // getFullYear()

console.log("Hours (0-23):", currentDate.getHours()); // getHours()
console.log("Milliseconds (0-999):", currentDate.getMilliseconds());

console.log("Minutes (0-59):", currentDate.getMinutes()); // getMinutes()
console.log("Month (0 = January):", currentDate.getMonth()); // getMonth()

console.log("Seconds (0-59):", currentDate.getSeconds()); // getSeconds()
console.log("Time (ms since Jan 1, 1970):", currentDate.getTime()); // getTime()

console.log("Date String:", currentDate.toDateString()); // toDateString()
