/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .map((ele) => {
    return ele !== "," ? ele : "";
  })
  .filter((ele) => {
    return isNaN(parseInt(ele));
  })
  .reduce((acc, curr) => {
    return acc + curr;
  })
  .slice(true, -isNaN(myString))
  .replaceAll("_", " ");

console.log(solution); // Elzero Web School

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString
//   .split(",")
//   .map((ele) => {
//     return !parseInt(ele) ? ele : "";
//   })
//   .join("")
//   .split("")
//   .filter((ele) => {
//     return ele != "_";
//   }).filter((ele, index, self)=> self.indexOf(ele) === (index)).join("")
