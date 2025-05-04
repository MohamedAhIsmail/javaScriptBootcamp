// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr);

// arr.push("d")

// Task 1

// Create Your Object Here

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${member.name}, My Age Is ${this.age}, I Live In ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log("^".repeat(20));

// Task 2

// Method One
// Create Your Object Here

let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = new Object();

objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

// let objMethodThree = new Object({
//   property : "Method Three"
// })

let objMethodThree = Object.create(objMethodTwo);

objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

let objMethodFour = Object.assign({}, { property: "Method Four" });

console.log(objMethodFour.property); // "Method Four"

console.log("^".repeat(20));

// Task 3

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject = Object.assign({}, { a: a }, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

console.log("^".repeat(20));

// Task 4

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let gameNames = Object.keys(myFavGames);
let objectLength = gameNames.length;

for (let i = 0; i < objectLength; i++) {

  let gameName = gameNames[i];
  let gameData = myFavGames[gameName]
  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${gameData.publisher}`);
  console.log(`The Price Is ${gameData.price}`);

  // Check If Nested Object Has Property (bestThree)
  if ("bestThree" in gameData) {
    console.log("- Game Has Releases");
    console.log(`First => ${gameData.bestThree.one}`);
    console.log(`Second => ${gameData.bestThree.two}`);
    console.log(`Third => ${gameData.bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
