var a = 10;
var a = 20;

let b = 1;
// let b = 20;

const pi = 3.14;

// TDZ temporal dead zone
console.log(x);

var x = 12;

console.log(name);
var name = "Raj Gupta";
// in let temporal dead zone exist but in var temporal dead zone not possible

console.log(age);
let age = 24;

var x = 1; //global
{
  var x = 2; //global
}
console.log(x);
