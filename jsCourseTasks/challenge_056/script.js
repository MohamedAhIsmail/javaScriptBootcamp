/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Hazem", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Hany",
  "Hayam",
  "Haytham",
];

let counter = 1;
let newAdmins = [];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  newAdmins.push(myAdmins[i]);
}
// console.log(newAdmins);

document.write(`<div>We Have ${newAdmins.length} Admins</div>`);
document.write("<hr>");

for (let i = 0; i < newAdmins.length; i++) {
  document.write(`<p>The Admin For Team ${counter} Is ${newAdmins[i]}</p>`);
  counter++;
  document.write("<h1>Team Members:</h1>");

  let empCounter = 1;
  
  for (let j = 0; j < myEmployees.length; j++) {
    if (newAdmins[i][0] === myEmployees[j][0]) {
      document.write(`<p>- ${empCounter} ${myEmployees[j]}</p>`);
      empCounter++;
    }
  }
  document.write("<hr>");
}
