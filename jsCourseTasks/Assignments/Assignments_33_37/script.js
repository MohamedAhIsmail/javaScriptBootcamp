//Task 1

// Test Case 1
// let num1 = 9; // "009"

// // Test Case 2
// let num2 = 20; // "020"

// // Test Case 3
// let num3 = 110; // "110"

// if (num1 < 10) {
//   console.log("00" + num1);
// }

// if (num2 > 10 && num2 < 100) {
//   console.log("0" + num2);
// }

// if (num3 >= 100) {
//   console.log(`${num3}`);
// }

let num = 9

if (num < 10) {
  console.log("00" + num);
} else if (num > 10 && num < 100) {
  console.log("00" + num);
} else  {
  console.log(`${num}`)
}

// Task 2

let num0 = 9;
let str = "9";
let str2 = "20";

// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

if (num0 == str) {
  console.log(`${num0} Is The Same Value As ${str}`);
}

if (num0 == str && typeof num0 != typeof str) {
  console.log(`${num0} Is The Same Value As ${str} But Not The Same Type`);
}

if (num0 != str2 && typeof num0 != typeof str2) {
  console.log(`${num0} Is Not The Same Value Or The Same Type As ${str2}`);
}

if (str != str2 && typeof str == typeof str2 ) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}


console.log("====================================================================")

//Task 3

let num5 = 10;
let num6 = 30;
let num7 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if (num6 > num4 && typeof num6 != typeof num5) {
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}



console.log("====================================================================")


//Task 4

// Edit What You Want Here

let num1 = 10;
let num2 = 9;
let num3 = +"10";
let num4 = 32;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

console.log("-----------------")

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

console.log("-----------------")


// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

console.log("-----------------")


// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

console.log("-----------------")


if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

console.log("-----------------")


if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

console.log("-----------------")


// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}