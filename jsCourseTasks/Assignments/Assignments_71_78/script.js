let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let newrem = removeChars.filter((ele) => {
  return ele !== "@"
}).reduce((acc, curr)=> {
  return acc + curr
});

console.log(newrem);
