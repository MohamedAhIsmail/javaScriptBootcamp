/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.reverse().slice(my.indexOf("Osama"))); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(counter, my.length - true)); // ["Elham", "Mazero"]

my = my.slice(counter, my.length - true);

console.log(
  my
    .slice(zero, true)
    .toString()
    .slice(zero, true + true) + my[my.length - true].slice(true + true)
); // "Elzero"

my =
  my
    .slice(zero, true)
    .toString()
    .slice(zero, true + true) + my[my.length - true].slice(true + true);

console.log(
  my.slice(counter + true).charAt(zero) +
    my.slice(my.length - true).toUpperCase()
); // "rO"
