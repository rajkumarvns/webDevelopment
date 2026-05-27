// data types
let a = 9007199254740991n;

a = a + 2n;

console.log(a);

// array
let x = [1, 2, 3];
let b = x;
b.pop();
console.log(b);

let v = {
  name: "Raj",
  age: 24,
  gmail: "raj@123",
};

console.log(typeof null); //object
x instanceof Array;
console.log(x);

let m = 10;
let n = 20;
if (m > 5 && n < 25) {
  console.log("A");
} else {
  console.log("B");
}

let isAdmin = true;
let isLoggedIn = false;
if (isAdmin || isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access Denied");
}

let temp = 35;
if (!(temp < 30)) {
  console.log("Hot");
} else {
  console.log("Pleasant");
}

let a1 = 0;
if (a1) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

let score = 79;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade);

let points = 60;
let status = points >= 100 ? "Gold" : points >= 60 ? "Silver" : "Bronze";
console.log(status);

let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access);

let a2 = 5;
a2++;
console.log(a2);

++a2;
console.log(a2);

let x1 = 3;
let y = x1++;
console.log(x1, y);

let p = 4;
let q = ++p;
console.log(q);

let m1 = 10;
console.log(m1--);
console.log(m1);

let o = 5;
let result = o++ + ++o;
console.log(result);

let count = 5;
if (count-- === 5) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
