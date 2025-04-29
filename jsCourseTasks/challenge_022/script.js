let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-(-d * -e)); //2000
console.log(-d + +e * 2 + f + true * 3); // 173


// challenge 2




// challenge 1

let a = 10;
let b = "20";
let c = 80;


console.log(++a + +b++ + +c++ - +a++);
/* 
    [++a] [+] [+b++] [+] [+c++] [-] [+a++]

    [++a]
    - value : 11
    - explain: pre increment

    [+]
    - explain: add operator

    [+b++]
    - value : 20
    - explain: post increment

    [+c++]
    - value : 80
    - explain: post increment

    [+a++]
    - value : 11
    - explain: post increment
*/
console.log(11 + 20 + 80 - 11);
console.log("Mostafa");

console.log(++a + -b + +c++ - -a++ + +a);
/*
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
    [++a]
    - value : 13
    - explain: pre increment

    [-b]
    - value : 21
    - explain: no increment

    [+c++]
    - value : 81
    - explain: post increment

    [-a++]
    - value : -13
    - explain: post increment

    [+a]
    - value : 14
    - explain: post increment
*/ 
console.log(13 + -21 + 81 - -13 + 14);
console.log("Mostafa");

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]

    [--c]
    - value : 81
    - explain: pre decement

    [+b]
    - value : 21
    - explain: no increment

    [--a]
    - value : 13
    - explain: pre decrement

    [*]
    - explain: multiply by

    [+b++]
    - value : 21
    - explain: post increment

    [+b]
    - value : 22
    - explain: no increment

    [a]
    - value : 13
    - explain: no increment

    [--a]
    - value : 12
    - explain: pre decrement

    [+true]
    - value : 1
    - explain: true = 1
*/

console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 -1);
console.log("Mostafa");

// challenge 2

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

console.log(-d * +e); //2000
console.log(- -100 * 20);
console.log(-d + ++e * ++g + ++f); //173

console.log(- -100 + 21 * 2 + 31);









