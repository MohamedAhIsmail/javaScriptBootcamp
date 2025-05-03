// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let newrem = removeChars.filter((ele) => {
//   return ele !== "@"
// }).reduce((acc, curr)=> {
//   return acc + curr
// });

// console.log(newrem);

// Task 1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newArr = mix
  .map((ele) => {
    return typeof ele != "number" ? ele : "";
  })
  .reduce((acc, curr) => {
    return acc + curr;
  });

console.log(newArr);

// Elzero

console.log("#".repeat(20));

// Task 2

let myString = "EElllzzzzzzzeroo";

let newStr = myString
  .split("")
  .filter((ele, index, arr) => {
    return arr.indexOf(ele) === index;
  })
  .join("");

console.log(newStr);

// Elzero

console.log("#".repeat(20));

// Task 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray
  .reduce((acc, curr) => {
    return acc + curr;
  })
  .replace(",", "");
console.log(newArray);

// Elzero

console.log("#".repeat(20));

// Task 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNumsStr = numsAndStrings
  .filter((ele) => {
    return typeof ele === "number";
  })
  .map((ele) => {
    return -ele;
  });

console.log(newNumsStr);

// [-1, -10, 10, 20, -5, -3]

console.log("#".repeat(20));

// Task 5

let nums = [2, 12, 11, 5, 10, 1, 99];

let lastNums = nums.reduce((acc, curr) => {
  return curr % 2 === 0 ? curr * acc : acc + curr;
}, 1);

console.log(lastNums);

// 500
