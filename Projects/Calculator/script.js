function Calculate(data){
    const text1 = document.getElementById("text")
    if(data === "AC")
    {
        text1.innerText = "0";
        return;
    }
    if(data === "="){
        const EdgeCase = text1.innerText
        const EQ = text1.innerText;
        const solution = eval(EQ);
        text1.innerText = solution;
        return;
    }
    if(data === "C")
    {
        // const eq = equation.innerText;
        text1.innerText = text1.innerText.slice(0,-1);
        return;
    }
    if(text1.innerText === "0"){
        text1.innerText + data;
    }
    else{

        text1.innerText = text1.innerText + data;
    }
}