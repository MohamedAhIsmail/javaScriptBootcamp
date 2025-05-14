// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_0_0_0_0_0); // 100000
console.log(100_00_0); // 100000
console.log(1000_00); // 100000
console.log(100 * 1000); // 100000
console.log(10 ** 5); // 100000 // Math.pow(10 * 5)
console.log(2 * 50000); // 100000
console.log(5e4 * 2); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.4)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.5)); // 100000

//task 2

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//task 3
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16

// task 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// task 5
let num = 10;

console.log(Number.isInteger(num) + true); // 2
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//task 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(parseInt(flt)); //10

//task 7
console.log(Math.floor(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4
