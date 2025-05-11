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






// task 1

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][setOfNumbers.size - 1]);

// task 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(myFriends);


console.log([...new Set(myFriends)].sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log(myFriends.filter((name, index, arr) => arr.indexOf(name) === index).sort());


// task 3

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};



// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true