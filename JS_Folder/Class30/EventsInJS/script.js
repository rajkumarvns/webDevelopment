let btn1 = document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn1 was clicked!");
    
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside the div");
    
}

btn1.addEventListener("click",() =>{
   console.log("button was clicked - handler1");
    
});
btn1.addEventListener("click",() =>{
   console.log("button was clicked - handler2");
    
});
const handler3 = () =>{
   console.log("button was clicked - handler3");
    
}
btn1.addEventListener("click", handler3);
btn1.addEventListener("click",() =>{
   console.log("button was clicked - handler4");
    
});
btn1.removeEventListener("click", handler3);