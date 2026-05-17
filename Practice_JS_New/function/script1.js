function sum(x, y) {
  s = x + y;
  console.log("before return");
  return s;
  // console.log("after return");
}
let val = sum(4, 5);
console.log(val);

function sum1(a, b) {
  return a + b;
}
const arrowSum = (a, b) => {
  console.log(a + b);
};

const arrowMul = (a, b) => {
  console.log(a * b);
};

const printHello = () => {
  console.log("Hello");
};

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

// forEach loop
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  console.log(val);
});

// with arrowFunc
arr.forEach((val) => {
  console.log(val);
});

let arr1 = ["Pune", "Delhi", "Mumbai", "Punjab"];
arr1.forEach((val, idx, arr1) => {
  console.log(val.toUpperCase(), idx, arr1);
});

let num = [1, 2, 3, 4, 5];
num.forEach((num) => {
  console.log(num ** 2);
});

// map method

num.map((val) => {
  console.log(val);
});

let newArr = num.map((val) => {
  return val * 2;
});
console.log(newArr);

// filter
let arrNum = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arrNum.filter((val) => {
  // return val%2 === 0;
  return val > 3;
});
console.log(evenArr);

const output = arrNum.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);

// larger value return
const outputs = arrNum.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(outputs);

let marks = [80, 77, 90, 87, 76];
const marksOutput = marks.filter((val) => {
  return val > 70;
});
console.log(marksOutput);

// userInput taked and store in array

let n = prompt("Enter your marks:");
let arrnums = [];
for (let i = 1; i <= n; i++) {
  arrnums[i - 1] = i;
}
console.log(arrnums);
let result = arrnums.reduce((res, curr) => {
  return res + curr;
});
let factorial = arrnums.reduce((res, curr) => {
  return res * curr;
});

console.log(result);
console.log(factorial);
