// Task 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(true - true, num)); // ["Ahmed", "Elham", "Osama"];

// Task 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(friends.indexOf("Eman"), num - true)); // ["Eman", "Osama"]

// Task 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// Task 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// Task 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack[1] == needle) {
  console.log("Found");
}

if (haystack.slice(1, 2) == needle) {
  console.log("Found");
}

// Task 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

arr3 = arr1.slice(arr1.indexOf("X"), arr1.length); //X

arr4 = arr2.slice(true + true);

// console.log(arr4);
allArrs = allArrs.concat(arr3, arr4).sort().join("").toLowerCase();

console.log(allArrs); // fxy
