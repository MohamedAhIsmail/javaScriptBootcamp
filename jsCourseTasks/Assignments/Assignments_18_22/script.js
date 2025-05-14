// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

console.log(10 * 20 * 15 % 3 * 190 * 10 * 400)


//Task 2 

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * (true + true)); // 6

// Soultion Three
console.log(true + true + true + num); //  6

// Soultion Four
console.log(true * (num + num)); // 6

// Solution Five
console.log(true + num + true + true + true - true ); // 6

// Solution Six
console.log(num * true + true + true + true); // 6


// Task 3 

let num1 = "10";

// Solution One
console.log(+num1 +  +num1); // 20

// Solution Two
console.log(+num1 + +num1 + true - true); // 20

// Solution Three
console.log(+num1 * (true + true) ); // 20

// Solution Four
console.log(+num1 + +num1  + +num1 - +num1); // 20


//Task 4

let points = 10;

// Write Your Code Here

points = points + true + true + true

console.log(points); // 13

// Write Your Code Here
points = points - true - true - true -true - true 
console.log(points); // 8;