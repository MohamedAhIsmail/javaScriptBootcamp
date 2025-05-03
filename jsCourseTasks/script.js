let mix = "A13BS2ZX";

let res = 1;
let nums = mix
  .split("")
  .filter((ele) => {
    return !isNaN(parseInt(ele));
  })
  .map((ele) => {
    return parseInt(ele);
  })
  .map((ele) => {
    return (res *= ele);
  });

console.log(res);

// arr = [1, 2, 3, 4, ,5]

// console.log(arr);
