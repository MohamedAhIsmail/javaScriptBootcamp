// OOP

// old syntax

// function User(id, name, salary) {
//   this.id = id;
//   this.name = name;
//   this.salary = salary;
// }

// let userOne = new User(100, "Mohamed", 10000);

// console.log(userOne.id);
// console.log(userOne.name);
// console.log(userOne.salary);

// New Syntax

// class User {
//   constructor(id, name, salary) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//   }
// }

// let userOne = new User(100, "Mohamed", 10000);

// console.log(userOne.id);
// console.log(userOne.name);
// console.log(userOne.salary);

class User {
  static count = 0;

  constructor(id, name, salary) {
    this.id = id;
    this.name = name || "Unkown";
    this.salary = salary;
    this.msg = function () {
      return `Hello ${this.name} Your Salary Is ${this.salary}`;
    };
    User.count++;
  }

  sayHello() {
    return `Hello Mr ${this.name}`;
  }

  updateName(newName) {
    this.name = newName;
  }

  static countUsers() {
    return `${this.count} => Users`;
  }
}

let userOne1 = new User(200, "Elsaka", 12000);
let userTwo2 = new User(200, "Elsaka", 12000);
let userThree3 = new User(200, "Elsaka", 12000);

console.log(userOne1.id);
console.log(userOne1.name);
console.log(userOne1.salary);

userOne1.updateName("Ali");

console.log(userOne1.msg());
console.log(userOne1.sayHello());
console.log(User.countUsers());

console.log(userOne1 instanceof User);

console.log("#".repeat(40));

class Admin extends User {
  constructor(id, name, salary, permissions) {
    super(id, name, salary);
    this.permissions = permissions;
  }
}

let admin1 = new Admin(110, "Mahmoud", 12999, 1);

console.log(admin1.id);
console.log(admin1.name);
console.log(admin1.salary);
console.log(admin1.sayHello());
console.log(admin1.permissions);

console.log("#".repeat(60));

class Superman extends Admin {
  constructor(id, name, salary, permissions, ability) {
    super(id, name, salary, permissions);
    this.ability = ability;
  }
}

let superman = new Superman(90, "SuperMan", 4000, 2, "Fly");

console.log(superman.id);
console.log(superman.name);
console.log(superman.salary);
console.log(superman.permissions);
console.log(superman.ability);

console.log(superman.sayHello());
console.log(superman.msg());

console.log(User.countUsers());

console.log("#".repeat(40));

// Encapsulation

class Parent {
  #salary;
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.#salary = salary;
  }

  calcSallry() {
    return this.#salary * 2;
  }
}

let parent = new Parent(10, "Ahmed", 16000);

console.log(parent.id);
console.log(parent.name);
console.log(parent.calcSallry());

console.log("#".repeat(40));

class Child extends Parent {
  constructor(id, name, salary, poss) {
    super(id, name, salary);
    this.poss = poss;
  }
}

let child = new Child(12, "Medo", 3400, "Frontend");

console.log(child.id);
console.log(child.name);
console.log(child.calcSallry());

console.log(User.prototype);
console.log(child);

console.log("#".repeat(40));

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.defineProperty(obj, "d", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 4,
});

console.log(obj);

for (let key in obj) {
  console.log(key, obj[key]);
}

console.log("#".repeat(40));

// task 1

// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return `Car Is Running Now`;
  }

  stop() {
    return `Car Is Stopped`;
  }
}

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("car2", 2023, 2000);
let car3 = new Car("car3", 2024, 3000);
console.log(
  `"Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}"`
);
console.log(`"${car1.run()}"`);

// Needed Output

("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");

console.log("#".repeat(40));

// task 2

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

console.log("#".repeat(40));

// Task 3

// Edit The Class
class Userr {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  changeCard() {
    let str = this.#c.toString().replace(/-/g, "");
    return str.match(/\d{4}/g).join("-");
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.changeCard()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new Userr("Osama", "1234-5678-1234-5678");
let userTwo = new Userr("Ahmed", "1234567812345678");
let userThree = new Userr("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

console.log("#".repeat(40));


// Task 4

// Write Your Code Here

String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

console.log("#".repeat(40));


// task 5

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  id: {
    enumerable: false,
  },
  country: {
    enumerable: false,
  },
  score: {
    writable: false,
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

("username => Elzero");
("score => 1000");
// {username: 'Elzero', score: 1000, id: 100}
