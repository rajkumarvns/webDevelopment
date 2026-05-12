function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed...";
}
function myFunction2() {
  document.getElementById("demo2").innerHTML = "Paragraph changed Again";
}
//window.alert(5+6); //or another way simple
// alert(10+20);

console.log(6 + 6);
const price1 = 2;
const price2 = 14;
let total = price1 + price2;
console.log(total);

let age = 88;
let text = "You can't Drive";
if (age >= 18) {
  text = "You can Vote";
}
console.log(text);

let country = "USA";
if (country === "USA" && age >= 16) {
  text = "You can Drive!";
}
console.log(text);

let time = 8;
if (time < 10) {
  greeting = "Good Morning";
} else if (time < 20) {
  greeting = "Good Day";
} else {
  greeting = "Good Evening";
}
console.log(greeting);

// ternary operator
let text1 = age < 18 ? "Minor" : "Adult";
console.log(text1);

let isMember = false;
let discount = isMember ? 0.2 : 0;
console.log(isMember);

// let day = 6;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

function sayHello() {
  return "Hello World";
}
console.log(sayHello());

function add(a, b) {
  return a + b;
}
let sum1 = add(5, 5);
let sum2 = add(50, 50);
let totalAdd = sum1 + sum2;
console.log(totalAdd);

function myFunctionN() {
  let carName = "Volvo";
  carName = "TOYOTA";
  // carName = "BMW";
  return carName;
}
console.log(myFunctionN());

function toCelsius(fahrenhiet) {
  return (5 / 9) * (fahrenhiet - 32);
}
let value = toCelsius(77);
console.log(value);

function toCelsius1(fahrenhiet) {
  return (5 / 9) * (fahrenhiet - 32);
}
console.log(toCelsius1(88).toFixed(3));

function sayHello() {
  return "Hello World";
}
function showHello() {
  document.getElementById("try").innerHTML = sayHello();
}

function sayHello(name) {
  return "Hello " + name;
}
console.log(sayHello("Raj"));

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
let name = fullName("Raj", "Gupta");
console.log(name);

function multiply(a, b) {
  return a * b;
}
let totalMul = multiply(2, 3) * 10;
console.log(totalMul);

x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

const multip = function (a, b) {
  return a * b;
};
console.log(multip(5, 8));

const multi = (a, b) => a * b;
console.log(multi(10, 20));

const hello = () => "Hello World!";
console.log(hello());

const square = (x) => x * x;
console.log(square(20));

const hello1 = (val) => "Hello" + val;
console.log(hello1("JS"));

const hello2 = () => "hello JavaScript";
console.log(hello2());
