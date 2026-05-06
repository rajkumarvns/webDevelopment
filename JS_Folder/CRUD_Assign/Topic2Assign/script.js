// Q1 Assign
console.log("------------Q1 add one element--------------------");
let arr = [];
arr.push(10);
console.log(arr);

// Assign Q2 add two elements using push operation
console.log("------------Q2 add two elements--------------------");
arr.push(20, 30);
console.log(arr);

console.log(
  "------------Q4 before store it in one variable--------------------",
);
let x = arr[2];
console.log(x);
// Q3 remove last element using pop()
console.log(
  "------------Q3 remove last element before store it in one variable--------------------",
);
arr.pop(30);
console.log(arr);

console.log(
  "------------Q5 add elements at begning of the array--------------------",
);
arr.unshift(8);
console.log(arr);

console.log(
  "------------Q6 add two elements at begning of the array--------------------",
);
arr.unshift(5, 7);
console.log(arr);

console.log("------------Q8 store element in one variable--------------------");
let removedElement = arr[0];
console.log(removedElement);

console.log(
  "------------Q7 remove elements at begning of the array--------------------",
);

arr.shift(5);
console.log(arr);

console.log(
  "------------Q9 remove elements from a specific position--------------------",
);
arr.splice(2, 1);
console.log(arr);

console.log(
  "------------Q10 add elements at specific index of the array--------------------",
);
arr.splice(0, 1, 6);
console.log(arr);

console.log(
  "------------Q11 replace element at specific position--------------------",
);
arr.splice(1, 1, "Raj");
console.log(arr);

console.log("------------Q12 using all operations--------------------");

let s_marks = [95, 86, 86, 79];
// add
s_marks.push(74);
console.log(s_marks);
// remove
s_marks.pop(74);
console.log(s_marks);
// add using unshift
s_marks.unshift(78);
console.log(s_marks);
// remove using shift
s_marks.shift();
console.log(s_marks);
