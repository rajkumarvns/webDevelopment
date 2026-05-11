function Calculate(data){
    const text = document.getElementById("text")
    if(data === "AC")
    {
        text.innerText = "0";
        return;
    }
    if(data === "="){
        const EdgeCase = text.innerText
        const EQ = text.innerText;
        const solution = eval(EQ);
        text.innerText = solution;
        return;
    }
    if(data === "C")
    {
        // const eq = equation.innerText;
        text.innerText = text.innerText.slice(0,-1);
        return;
    }
    if(text.innerText === "0"){
        text.innerText + data;
    }
    else{

        text.innerText = text.innerText + data;
    }
    document
  .getElementById("keydown")
  .addEventListener("keydown", function (event) {
  });

}