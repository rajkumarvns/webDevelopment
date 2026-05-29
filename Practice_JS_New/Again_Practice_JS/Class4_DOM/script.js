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
