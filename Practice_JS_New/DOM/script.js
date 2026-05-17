// alert("Hello JS");

console.dir(window.document);

console.log(document.body.childNodes[1]);

console.dir(document.body);

let heading = document.getElementById("heading");
console.log(heading);

let headings = document.getElementsByClassName("heading-class");
console.log(headings);

let paras = document.getElementsByTagName("p");
console.dir(document.paras);

let elements = document.querySelector("p");

console.log(elements);
let firstEl = document.querySelector("p");
console.log(firstEl);

console.log(document.querySelector("div").children);

let div = document.querySelector("div");

console.dir(div);

let heading = document.querySelector("h1");

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " From it self";

let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
let idx = 1;
for (div of divs) {
  div.innerText = `new Unique Value ${idx} `;
  idx++;
}

// divs[0].innerText = "new Unique value 1";
// divs[1].innerText = "new Unique value 2";
// divs[2].innerText = "new Unique value 3";
