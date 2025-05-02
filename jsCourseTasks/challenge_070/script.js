/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...theNames) {
//   // Parameter ?
//   let result = "String ";
//   function printNames() {
//     for (let i = 0; i < theNames.length; i++) {
//       // console.log(` String [${theNames[i]}]`);
//       result += `[${theNames[i]}] `;
//     }
//     return result + "=> Done!";
//   }

//   return printNames();
// };

let names = (...theNames) => "String " + theNames.map(name => `[${name}]`).join(", ") + " => Done !";

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));


// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, 20, 50)); // 80


console.log(calc(10, ...myNumbers)); // 10 + 20 + 50 = 80

// function calc(one, two, ...nums) {
//   return one + two + nums[0];
// }
