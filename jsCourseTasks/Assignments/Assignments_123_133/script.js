// let arr = [1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 2, 3, 4, 5];

// // arr.forEach(el => {
// //   console.log(el);

// // })
// // let nums = new Set(...new Set([1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 2, 3, 4, 5]));
// let nums = [...new Set(arr)]
// // nums.add(11).add(14)
// // nums.delete(1)
// // nums.delete(2)
// // nums.delete(3)

// // for (let i = 0; i < nums.length; i++){
// //   console.log(nums[i]);

// // }

// // console.log(arr);
// console.log(nums);

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// for (const value of nums) {
//   console.log(value); // 1 2 3
// }

// const obj = { a: 1, b: 2 };
// const values = Object.values(obj)

// console.log(values);

// console.log("$".repeat(20));

// let myArr = [10, 20, 30, 40, 50, "A", "B"];

// console.log(myArr);

// myArr.copyWithin(1, 5, 6);

// console.log(myArr);

// let myNums = [1, 2, 3, 4, 5, 6, 7];

// let thNumber = 67;

// let check = myNums.some(function(el) {
//   return el > this;
// }, thNumber);

// console.log(check);

// function checkValues(arr, value) {
//   return arr.some(function (el) {
//     return el === value;
//   });
// }

// console.log(checkValues(myNums, 12));

// const locations = {
//   20: "location 1",
//   30: "location 2",
//   40: "location 3",
//   10: "location 4",
//   50: "location 5",
// }

// let ars = Array.from(Object.keys(locations), (el)=>{
//   return +el
// })

// console.log(ars);

// task 1

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][setOfNumbers.size - 1]);

console.log("#".repeat(20));

// task 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log(myFriends);

console.log([...new Set(myFriends)].sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// console.log(
//   myFriends.filter((name, index, arr) => arr.indexOf(name) === index).sort()
// );

console.log("#".repeat(20));

// task 3

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let newMap = new Map(Object.entries(myInfo));

console.log(newMap);
console.log(newMap.size);
console.log(newMap.has("role"));

console.log("#".repeat(20));

// task 4

let theNumber = 100020003000;

let newSett = new Set([...theNumber.toString()]);

// console.log(newSett);

newSett.delete("0");

// console.log(newSett);

let finalNum = +[...newSett].join("");

console.log(finalNum);

// console.log(
//   +[...new Set([...`${100020003000}`].filter((e) => e != `${+[]}`))].join("")
// );

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

// Needed Output
// 123

console.log("#".repeat(20));

// task 5

let theName = "Elzero";

console.log(Array.from(theName));
console.log(theName.split(""));
console.log([...theName]);
console.log(Object.assign([], theName));
console.log([...Array(theName.length)].map((el, i) => theName[i]));
console.log([...new Set(theName)]);

// Needed Output
["E", "l", "z", "e", "r", "o"];

console.log("#".repeat(20));

// task 6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.sort();
// console.log(chars);
// chars.copyWithin(0, 3, 6)
// console.log(chars);

// // Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];


/////////////////////////////////////////


// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// console.log(chars.sort());

// chars.copyWithin(0, 4, 8)

// console.log(chars);


/// =================================


let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// console.log(chars.sort());

chars.copyWithin(2)

console.log(chars);


// Needed Output
["Z", "Y", "Z", "Y", "A", "D", "E"]

// Needed Output
['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']



console.log("#".repeat(20));

// task 7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
let newConc = numsOne.concat(numsTwo)
console.log(newConc);
numsOne.push(...numsTwo)
console.log(numsOne);



// Needed Output
[1, 2, 3, 4, 5, 6];

console.log("#".repeat(20));

// task 8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);

// Needed Output
210;
