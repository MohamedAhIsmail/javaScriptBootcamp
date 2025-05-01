let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
("1 => Sayed");
("2 => Mahmoud");

// while (index < friends.length) {
//   // console.log(friends[index]);
//   counter++
//   index++;
//   if (typeof friends[index] === "number") {
//     continue;
//   }
//   console.log(friends[index]);
//   // console.log(counter);

// }

// for (let i = index; i < friends.length; i++) {
//   console.log(friends[i]);

// }

// console.log(friends.length);

while (index < friends.length) {
  if (
    typeof friends[index] === "number" ||
    friends[index][true - true] === "A"
  ) {
    index++;
    continue;
  }

  counter++;
  console.log(` ${counter}=> ${friends[index]}`);
  index++;
}
