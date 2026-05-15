function sayHello() {
  return "Hello RICR";
}
console.log(sayHello());

function multiply(a,b){
    return a*b;
}
console.log(multiply(5,4));

function sayHello(){
    return "Hello World";
}
let greeting = sayHello();

console.log(greeting);


document.getElementById("demo").innerHTML = sayHello();

function checkAge(age){
    if(age<18){
        return "Too young";
    }
    return "Access granted"
}
console.log(checkAge(28));


y = findMax(1,23,500,123,55,77);
function findMax(){
    let max = -Infinity;
    for(let i = 0; i<arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax());

function run(fn){
    return fn();
}
const sayHello1 = function(){
    return "HelloRICR";
};
console.log(run(sayHello1));






















