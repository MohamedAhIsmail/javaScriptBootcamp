// let practice = "Os1 Os1Os Os8 Os8Os";

// let practiceReg = /Os[5-9]Os/g;

// console.log(practice.match(practiceReg));

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regex = /\d{4}:\w{2}\d(:\d{4})+/g;

console.log(ip.match(regex));

let result = regex.test(ip);

console.log(result);

console.log("=".repeat(20));

// task 2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg = /\bOs(\d{1,})?O\b/g;
console.log(specialNames.match(reg));

// Output
// ['Os10O', 'OsO', 'Os100O']

console.log("=".repeat(20));

// task 3

let phone = "+(995)-123 (4567)";

let reg2 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(reg2));

console.log(reg2.test(phone));

console.log("=".repeat(20));

// task 4

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

console.log("=".repeat(20));

// task 5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reX = /\d{2}\s?-?\s?\/?\d{2}\s?-?\/?\s?\d{1,}/g; // Write Pattern Here

console.log(date1.match(reX)); // "25/10/1982"
console.log(date2.match(reX)); // "25 - 10 - 1982"
console.log(date3.match(reX)); // "25 10 1982"
console.log(date4.match(reX)); // "25 10 82"

console.log("=".repeat(20));

// task 6

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /(https?:\/\/)?([\w]+\.)?([\w]+)\.\w+(\.\w+)?\/?.*/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
