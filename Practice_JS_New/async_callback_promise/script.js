console.log("one");
console.log("two");

function hello() {
  console.log("hello");
}

setTimeout(hello, 4000);
console.log("three");
console.log("four");

function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(1, 2, sum);

function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
}



















