// Task 1

// let start = 10;
// let end = 100;
// let exclude = 40;

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

// for (let i = start; i <= end; i += start) {
//   if (i === exclude) continue;
//   console.log(i);
// }

// Task 2

// let start = 10;
// let end = 0;
// let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// for (let i = start; i >= end; i--) {
//   if(i < start) {
//     console.log(`0${i}`);

//   } else {
//     console.log(i);

//   }
//   if (i === 3) {
//     break
//   }
// }

// console.log(1);

// Task 3

// let start = 1;
// let end = 6;
// let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   for (let i = breaker; i < end; i++) {
//     if ( i === 3 || i === 5) {
//       continue
//     }
//     console.log("--", i);
//     // if (i == breaker) break;
//   }
// }

// Task 4

let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < jump * jump) {
    break;
  }
}

// Output
10;
8;
6;
4;

console.log("#".repeat(20));

// Task 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");

let counter = true * true;

for (let i = letter.length; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) {
    continue;
  }
  console.log(`${counter} => ${friends[i]}`);
  counter++;
}

console.log("#".repeat(20));

// Task 6

let start = 0;
let swappedName = "elZerO";
let result = "";
// Output
("ELzERo");

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}

console.log(result);

console.log("#".repeat(20));

// Task 7

let startz = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2;
3;
4;

for (let i = startz; i < mix.length; i++) {
  if (typeof mix[i] === "string" || mix[i] == 1) {
    continue;
  }

  console.log(mix[i]);
}
