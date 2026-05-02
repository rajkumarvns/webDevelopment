let test = "This is global variable";

function classA() {
    console.log(test);
    
}
function classB() {
    let test2 = "this is local variable";
    console.log(test);
    console.log(test2);
    
}
function classC() {
    console.log(test);
}
function classD() {
    console.log(test);
}
function classE() {
    console.log(test);
}
function classF() {
    console.log(test);
}
function classG() {
    console.log(test);
}
classA();
classB();
classC();
classD();