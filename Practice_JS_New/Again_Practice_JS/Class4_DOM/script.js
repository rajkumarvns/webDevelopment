// let abc = document.querySelectorAll("h1");
// console.dir(abc);

let h1 = document.querySelector("h1");
// console.dir(h1);
h1.textContent = "Hello Raj How Are You";
// h1.innerHTML = "Hello Raj";
// h1.innerText = "Hello Raj Kumar Gupta";

h1.innerHTML = "<i>Raj</i>";
console.dir(h1);
let a = document.querySelector("a");
a.href = "https://www.google.com";
console.dir(a);

a.setAttribute("href", "https://www.amazone.com");
let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1778147356071-c8f5a7287ea6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

let a1 = document.querySelector("a");
console.log(a.getAttribute("href"));
a.removeAttribute("href");

let h2 = document.createElement("h2");
h2.textContent = "Hello JavaScript";
// adding h2 before script so ues append
document.body.append(h2);
// adding h2 after script so ues prepend
// document.body.prepend(h2);

let h3 = document.querySelector("h3");
h3.remove(h3);

let New = document.createElement("h1");
h1.textContent = "Hello JS New H1";
document.querySelector("div").appendChild(h1);

h1.style.color = "red";
h1.style.backgroundColor = "orange";
h1.style.fontFamily = "Gilroy";
h1.classList.add("newH1");

// h1.classList.remove("newH1");
// h1.classList.toggle();
let ans = document.getElementById("heading1");
ans.innerText = "Hello RICR";
console.dir(ans);

let lis = document.querySelectorAll("li");
lis.forEach((val) => {
  console.log(val.textContent);
});

for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].textContent);
}

let para = (document.querySelector("p").innerHTML =
  "<b>Updated</b> by JavaScript");
console.log(img.getAttribute("scr"));
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://images.unsplash.com/photo-1773332585788-9104ec6f38ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );

let x = document.querySelector("a");
x.setAttribute("href", "https://www.ricr.in");
console.log(x);

let divN = document.querySelector("div");
divN.setAttribute("title", "hello Raj Keep it up");

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

let ul = document.querySelector("ul");
let li1 = document.createElement("li");
li1.textContent = "New Task";
ul.appendChild(li1);

let img1 = document.createElement("img");
img.setAttribute(
  "scr",
  "https://images.unsplash.com/photo-1556888335-95371827d5fb?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

document.querySelector("div").prepend(img);

let ul1 = document.querySelector("ul");
let li2 = document.querySelector("li");
ul.removeChild(li2);
