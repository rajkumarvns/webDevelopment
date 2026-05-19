// simple callback
function completeHomeWork(callback) {
  console.log("Homework Completed");
  callback();
}
function playGames() {
  console.log("Now playing games");
}
completeHomeWork();

// Asynchronous Callback
console.log("Go to cafe");
setTimeout(function () {
  console.log("Coffee is ready");
}, 2000);
console.log("Sit and use mobile");

// callback hell example
setTimeout(() => {
  console.log("Wake up");
  setTimeout(() => {
    console.log("Take bath");
    setTimeout(() => {
      console.log("Eat Breakfast");
      setTimeout(() => {
        console.log("Go to exam center");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
