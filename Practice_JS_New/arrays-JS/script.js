let marks = [76, 90, 89, 84, 79];
console.log(marks.length);

let electronicsDe = ["Laptop", "Mobile", "Earphones", "mouse", "keyboard"];
console.log(electronicsDe);
marks[0] = 88;
console.log(marks);

for (let idx = 0; idx < electronicsDe.length; idx++) {
  console.log(electronicsDe[idx]);
}
// for of
for (let el of electronicsDe) {
  console.log(el);
}

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for (let city of cities) {
  console.log(city.toUpperCase());
}

// marks of average
let mark = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of mark) {
  sum += val;
}
let avg = sum / mark.length;
console.log(`avg marks of the class = ${avg}`);

let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
  console.log(`value at index ${i} = ${val}`);
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
}

for (let i = 0; i < items.length; i++) {
  let offers = items[i] / 10;
  items[i] -= offers;
}
console.log(items);

let foodItems = ["potato", "tomato", "apple", "litchi", "chips"];
foodItems.push("Mango", "paneer");
foodItems.push("burger");
console.log(foodItems);
let deleteItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deleteItem);
console.log(foodItems.toString());

// concate
let marvelHeores = ["thor", "spiderman", "ironman"];
let dcHeroes = ["supernam", "batman"];
let indianHeroes = ["shaktiman", "krish"];
let heores = marvelHeores.concat(dcHeroes, indianHeroes);
console.log(heores);

marvelHeores.unshift("antman");
console.log(marvelHeores);

let val = marvelHeores.shift();
console.log("deleted ", val);

console.log(marvelHeores.slice(1, 2));

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// multiple add elements
// number.splice(2,0,101,102);
console.log(number);

// add element
number.splice(2, 0, 101);
console.log(number);

// delete elements
number.splice(2, 4);
console.log(number);

// replace elements
number.splice(3, 1, 10);
console.log(number);

// questions practice
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "NetFlix"];
console.log(companies);

companies.splice(0, 1);
console.log(companies);

companies.splice(1, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

function getStack() {
  const obj = {};
  if ("captureStackTrace" in Error) {
    Error.captureStackTrace(obj, getStack);
  }
  return obj.getStack;
}
function foo() {
  console.log(getStack());
}
foo();
