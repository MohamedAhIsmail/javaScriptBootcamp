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

let userOne = new User(200, "Elsaka", 12000);
let userTwo = new User(200, "Elsaka", 12000);
let userThree = new User(200, "Elsaka", 12000);

console.log(userOne.id);
console.log(userOne.name);
console.log(userOne.salary);

userOne.updateName("Ali");

console.log(userOne.msg());
console.log(userOne.sayHello());
console.log(User.countUsers());

console.log(userOne instanceof User);

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
  #salary
  constructor (id, name, salary) {
    this.id = id;
    this.name = name
    this.#salary = salary
  }

  calcSallry() {
    return this.#salary * 2
  }
}

let parent = new Parent(10, "Ahmed", 16000)

console.log(parent.id);
console.log(parent.name);
console.log(parent.calcSallry());

console.log("#".repeat(40));

class Child extends Parent {
  constructor(id, name, salary, poss){
    super(id, name, salary )
    this.poss = poss
  }
}

let child = new Child(12, "Medo", 3400, "Frontend")

console.log(child.id);
console.log(child.name);
console.log(child.calcSallry());


