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

let arr = [10, 20, 50, 89];
let any = arr.some(function (val) {
  return val > 85;
});
console.log(any);

let eve = arr.every(function (v) {
  return v > 10;
});
console.log(eve);
// de structuring
let [a3, b3, , d] = arr;
console.log(d);

let arr2 = [...arr];
console.log(arr);

console.log(arr2);

let fruits = ["Apple", "Mango", "Banana", "Litchi"];

console.log(fruits[1]);

fruits.push("Grapes");
fruits.unshift("Pineapple");
console.log(fruits);

fruits.splice(3, 1, "Kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors);

let items = [1, 2, 3, 4, 5, 6];
let newarr = items.slice(3, 5);
console.log(newarr);
let names = ["Raj", "Ayush", "Vaibhav", "Chandu"];
names.sort();
console.log(names);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNum = num.map(function (val1) {
  return val1 * val1;
});
console.log(newNum);

let filt = num.filter(function (v) {
  return v > 5;
});
console.log(filt);

let redu = num.reduce((acc, valu1) => {
  return acc + valu1;
});
console.log(redu);

let finding = num.find((valu) => {
  return valu < 5;
});
console.log(finding);

let fullName = ["Raj", "Gupta"];
let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);

let merge = [...items, ...num];
console.log(merge);

let countries = ["USA", "UK"];
countries = ["India", ...countries];
console.log(countries);

let items2 = [...items];
console.log(items);
console.log(items2);
