// let date = new Date();

// console.log(date);
// console.log(Date.now());
// console.log(date.getTime());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());

// console.log("*".repeat(40));

// function* genertaeNumbers() {
//   // yield 1;
//   // yield 2;
//   // yield 3;
//   // yield 4;
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// let generator = genertaeNumbers();

// console.log(genertaeNumbers().next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// task 1

// let date = new Date("Oct 1 1995")

function getMyAgeDetails(birthDate) {
  let theDate = new Date(birthDate);
  let dateNow = new Date();

  let age = dateNow - theDate;

  let obj = {
    seconds: (age / 1000).toFixed(),
    minutes: (age / 1000 / 60).toFixed(),
    hours: (age / 1000 / 60 / 60).toFixed(),
    days: (age / 1000 / 60 / 60 / 24).toFixed(),
    months: (age / 1000 / 60 / 60 / 24 / 30).toFixed(),
    years: (age / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(),
  };

  return obj;
}

console.log(getMyAgeDetails("Nov-18-1998"));

console.log("*".repeat(40));

let birthDate = new Date("Nov-18-1998");
console.log(birthDate);

let dateNow = new Date();
console.log(dateNow);

let age = dateNow - birthDate;

console.log(`${(age / 1000).toFixed()} Seconds`);
console.log(`${(age / 1000 / 60).toFixed()} Minutes`);
console.log(`${(age / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(age / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(age / 1000 / 60 / 60 / 24 / 30).toFixed()} Months`);
console.log(`${(age / 1000 / 60 / 60 / 24 / 30 / 12).toFixed()} Years`);

console.log("*".repeat(40));

// task 2

let tenYearsInMs = 10 * 365 * 24 * 60 * 60 * 1000;

let total = tenYearsInMs + 1000;
let thedate1 = new Date(total);

console.log(thedate1);

console.log("*".repeat(40));

// task 3

let now = new Date();

let firstDayOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

let lastDayOfPreviousMonth = new Date(firstDayOfCurrentMonth - 1);

console.log(lastDayOfPreviousMonth.toString());

let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let previousMonthName = monthNames[lastDayOfPreviousMonth.getMonth()];
let lastDate = lastDayOfPreviousMonth.getDate();

console.log(
  `Previous Month Is ${previousMonthName} And Last Day Is ${lastDate}`
);

console.log("*".repeat(40));

// task 4

let date1 = new Date("Nov 18 1998");

let date2 = new Date(1998, 11, 18, 0, 0, 0);

let date3 = new Date(date1.getTime());

console.log(date1.toString());
console.log(date2.toString());
console.log(date3.toString());

console.log("*".repeat(40));

// task 5

let start1 = new Date();

for (let i = 0; i < 999; i++) {
  console.log(i);
}

let end1 = new Date();

let duration1 = end1 - start1;

console.log(" duration", duration1);

//==========================================

let start = performance.now();

for (let i = 1; i <= 999; i++) {
  console.log(i);
}

let end = performance.now();

let duration = Math.floor(end - start);

console.log(`Loop Took ${duration} Milliseconds.`);

console.log("*".repeat(40));

// task 6

// Write Your Generator Function Here

function* gen() {
  let index = 14;
  let diff = 140;

  while (true) {
    yield index;
    index += diff;
    diff += 200;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("*".repeat(40));

// task 7

// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here

// function* genAll() {
//   yield* genNumbers();
//   yield* genLetters();
// }

// let generator1 = genAll();

// console.log(generator1.next()); // {value: 1, done: false}
// console.log(generator1.next()); // {value: 2, done: false}
// console.log(generator1.next()); // {value: 3, done: false}
// console.log(generator1.next()); // {value: 4, done: false}
// console.log(generator1.next()); // {value: 5, done: false}
// console.log(generator1.next()); // {value: "A", done: false}
// console.log(generator1.next()); // {value: "B", done: false}
// console.log(generator1.next()); // {value: "C", done: false}
// console.log(generator1.next()); // {value: "D", done: false}

//=============================

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  let seen = new Set();

  for (let val of genNumbers()) {
    if (!seen.has(val)) {
      seen.add(val);
      yield val;
    }
  }

  for (let val of genLetters()) {
    if (!seen.has(val)) {
      seen.add(val);
      yield val;
    }
  }
}

let generator1 = genAll();
console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}

console.log("*".repeat(40));

