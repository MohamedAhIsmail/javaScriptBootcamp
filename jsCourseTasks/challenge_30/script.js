/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";
// let a = "Elsaka code school";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2, 6).charAt(0).toLocaleUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.slice(13, -3).repeat(8).toLocaleUpperCase()); // HHHHHHHH

// Return
console.log(a.slice(0, 6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)}${a.substr(10)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toLocaleUpperCase() +
    a.charAt(a.length - 1)
); // eLZERO WEB SCHOOl

// console.log(a);


// الحمد لله تم 