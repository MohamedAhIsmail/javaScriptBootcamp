// Task 1

function sayHello(theName, theGender) {
  if (theGender === "Male" && theName) {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female" && theName) {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Task 2

function calculate(firstNum, secondNum, operation) {
  // Your Code Here

  if (firstNum && secondNum && operation === "add") {
    console.log(firstNum + secondNum);
  } else if (firstNum && secondNum && operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (firstNum && secondNum && operation === "multiply") {
    console.log(firstNum * secondNum);
  } else if (firstNum === undefined || secondNum === undefined) {
    console.log("Second Number Not Found");
  } else {
    console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

calculate(10, 1);

// Task 3

function ageInTime(theAge) {
  // Your Code Here

  if (theAge > 10 && theAge < 100) {
    console.log(`Your age in months => ${theAge * 12}`);
    console.log(`Your age in days => ${theAge * 12 * 30}`);
    console.log(`Your age in hours=> ${theAge * 12 * 30 * 24}`);
    console.log(`Your age in seconds=> ${theAge * 12 * 30 * 24 * 60}`);
  } else {
    console.log("Age ot of range!");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Task 4

// function checkStatus(a, b, c) {
//   // Your Code Here
//   let elName = "";
//   let elAge = 0;
//   let available = true;

//   if (typeof a === "string" || typeof b === "string" || typeof c === "string") {
//     elName = a;
//     elName = b;
//     elName = c;
//   } else if (
//     typeof a === "number" ||
//     typeof b === "number" ||
//     typeof c === "number"
//   ) {
//     elAge = a;
//     elAge = b;
//     elAge = c;
//   } else {
//     available = a;
//     available = b;
//     available = c;
//     if (available === true) {
//       available = "Available";
//     } else {
//       available = "Not Available";
//     }
//   }

//   console.log(
//     `Hello ${elName}, Your Age Is ${elAge}, You Are ${available} For Hire`
//   );
// }

function checkStatus(a, b, c) {
  let elName = "";
  let elAge = 0;
  let available = false;

  for (let val of [a, b, c]) {
    if (typeof val === "string") {
      elName = val;
    } else if (typeof val === "number") {
      elAge = val;
    } else if (typeof val === "boolean") {
      available = val;
    }
  }

  let availabilityStatus = available ? "Available" : "Not Available";

  console.log(
    `Hello ${elName}, Your Age Is ${elAge}, You Are ${availabilityStatus} For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Task 5

function createSelectBox(startYear, endYear) {
  // Your Code Here
  let opt = ``;
  for (let i = startYear; i <= endYear; i++) {
    opt += `
      <option>${i}</option>
    `;
  }

  document.write(`<select>${opt}</select>`);
}
createSelectBox(2000, 2021);

// Task 6

function multiply(...numbers) {
  let result =1;
  for (let i = 0; i < numbers.length; i++) {
    if ( typeof numbers[i] === "string") {
      continue;
    } 

    result *= parseInt(numbers[i]);
    // console.log(numbers[i]);
    
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
