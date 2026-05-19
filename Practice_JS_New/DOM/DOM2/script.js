let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// set attributes
console.log(para.setAttribute("class", "newClass"));

let div = document.querySelector("div");

div.style.backgroundColor = "green";
div.style.fontSize = "20px";
// div.style.visibility = "hidden";

div.innerText = "Hello!";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
// console.log(newBtn);
let p = document.querySelector("p");
p.append(newBtn);

// prepend
p.prepend(newBtn);
// before
p.before(newBtn);
// after
p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerText = "Hi, I am new!";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();
newHeading.remove();

let newBtn2 = document.createElement("button");
newBtn2.style.backgroundColor = "red";
newBtn2.style.color = "white";

newBtn2.innerText = "Click Me!";

console.log(newBtn2);
document.querySelector("body").prepend(newBtn2);
let para = document.querySelector("p");

para.classList.add("newClass");
