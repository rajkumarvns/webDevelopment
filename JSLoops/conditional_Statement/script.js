var n = 5;
if (n > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

var age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// conditional
var con = 9;
if (con % 2 == 0) {
  console.log("Even");
} else {
  console.log("odd");
}

// grade check
let grade = 95;
if (grade > 90) {
  console.log("A");
} else if (grade >= 75 && grade <= 90) {
  console.log("B");
} else if (grade >= 50 && grade <= 75) {
  console.log("C");
} else {
  console.log("Fail");
}

// user and password check
let user = "xyz";
let pass = "7612";
if (user === "xyz" && pass === "7612") {
  console.log("Login Successful.");
} else {
  console.log("Login Fail.");
}

// sorthand trick
let data;
let name = "Raj";
data = name || "N/A";
console.log(data);

// let data  = "7612";
// let name = "Raj";
// if(name!="Raj" ? console.log(name):console.log(data))
// {

// }

// switch case
let choice = 10;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }
  default: {
    console.log("Water");
  }
}
