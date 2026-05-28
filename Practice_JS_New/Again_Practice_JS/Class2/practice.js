let a = 5;
console.log(a++);

let b = 5;
console.log(++b);

let x = 10;
x--;
console.log(x);

let y = 8;
console.log(y--);
console.log(y);

let n = 3;
console.log(++n);
console.log(n++);

let a1 = 2;
let b1 = a1++;
console.log(a1);
console.log(b1);

let x1 = 4;
let y1 = ++x1;
console.log(x1);
console.log(y1);

let p = 5;
console.log(p++ + 2);

let a2 = 6;
console.log(++a2 + a2++);

let b3 = 7;
console.log(--b3 + b3--);

let O = 3;
console.log(O++ + ++O);

let O1 = 1;
console.log(O1++ + O1++ + ++O1);

let n1 = 5;
let result1 = n1++ + --n1 + ++n;
console.log(result1);
console.log(n1);

function getVal(val) {
  if (val < 25) return "D";
  else if (val < 50) return "C";
  else if (val < 75) return "B";
  else return "A";
}
console.log(getVal(76));

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 33 && score <= 59) {
    return "E";
  } else if (score >= 0 && score <= 32) {
    return "Fail";
  } else {
    return "Invalid Marks";
  }
}

console.log(getGrade(89));

// early return pattern
function rsp(user, computer) {
  if (user === computer) return "Draw";
  if (user === "rock" && computer === "scissor") return "user";
  if (user === "scissor" && computer === "paper") return "user";
  if (user === "paper" && computer === "rock") return "user";
  return "computer";
}
console.log(rsp("rock", "paper"));

// functions
// function statements
function abs() {
  console.log("xyz");
}
abs();
// function expression
let fnc = function () {
  console.log("heyGy");
};
fnc();

// function fat arrow function
let xyz = () => {
  console.log("hello");
};
xyz();

function dance(v1) {
  console.log(`${v1} Dance`);
}
dance("ghoda");
dance("Hirad");
dance("cheel");

// ... (rest)
function arr(...val) {
  console.log(val);
}

arr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// higher order function
function nest(val) {
  //   val();
}
nest(function () {
  console.log("JavaScript");
});

// Closures function
function abc() {
  let c = 12;
  return function () {
    console.log(c);
  };
}
abc();
// immediatly invoked function
(function () {})();

// hoisting it means before creation we use it like below example but there is some issues if we used in function expression so this code is gives you error

hoisting();
function hoisting() {
  console.log("This is Hoisting...");
}

let multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 4));

function welcome(name) {
  console.log(name);
}
welcome("Raj Gupta");

function demo(a, b, c) {
  demo(1, 2);
}

function sayHi(name = "Guest") {
  console.log("Hi", name);
}
sayHi();

function getScore(...Scores) {
  let total = 0;
  Scores.forEach(function (val) {
    total = total + val;
  });
  return total;
}
console.log(getScore(10, 12, 14, 234, 43));

function checkAge(age) {
  if (age < 18) return "Too Young";
  return "Allowed";
}
console.log(checkAge(19));

function mno(val) {
  val();
}
mno(function () {
  console.log("Hello RICR");
});

// convert this normal function into IIFE
(function init() {
  console.log("Initialized");
})();

function bmi(weight, height) {
  return weight / (height * height);
}
console.log(bmi(65, 5.1).toFixed(2));

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}
let discounter = discountCalculator(10);
console.log(discounter(200));

function double(val) {
  return val * 2;
}
console.log(double(10));

// (function () {
//   const pass = "secret Password";
// })();
// console.log(pass);

let marks = [10, 23, 42, 45, 88];
marks[0] = 55;
console.log(marks);

let arr1 = [1, 2, 3, 4, 5];
arr1.push(1000);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift(8);
console.log(arr1);

arr1.splice(2, 1);
console.log(arr1);

let newarr = arr1.slice(1, 4);

console.log(newarr);

arr1.reverse();
console.log(arr1);

let arr2 = [5, 3, 6, 2, 8, 1, 1];
let sr = arr2.sort(function (a, b) {
  return a + b;
});
console.log(sr);

arr2.forEach(function (valu) {
  console.log(valu + 15);
});
console.log(arr2);

let ans = arr2.map(function (value) {
  return 15;
});
console.log(ans);

let newar = arr2.filter(function (v) {
  if (v >= 4) return true;
});
console.log(newar);

let answ = arr2.reduce(function (accumulator, va) {
  return accumulator + va;
}, 0);

console.log(answ);

let v2 = arr2.find(function (val1) {
  return val1 === 1;
});
console.log(v2);
