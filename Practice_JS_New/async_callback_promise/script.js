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

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("error");
  });
};
let promise = getPromise();
promise.then(() => {
  console.log("promise Fulfilled");
});
promise.catch(() => {
  console.log("rejected");
});

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1......");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2.....");
      resolve("success");
    }, 6000);
  });
}
console.log("fetching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("fetching data2....");
  let p2 = asyncFunc2();
  p2.then((res) => {});
});
