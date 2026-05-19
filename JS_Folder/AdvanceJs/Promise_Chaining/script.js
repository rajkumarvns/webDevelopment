//  Basic Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise with setTimeout
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

getData().then((data) => {
  console.log(data);
});

// Promise Chaining
function selectProduct() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Product Selected");
      resolve();
    }, 1000);
  });
}
function makePayment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment Successful");
      resolve();
    }, 1000);
  });
}
function orderPlaced() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Placed");
      resolve();
    }, 3000);
  });
}

selectProduct()
  .then(makePayment)
  .then(orderPlaced)
  .then(() => {
    console.log("Shopping Completed");
  });

//   Chaining with Data Passing
function add(num) {
  return new Promise((resolve) => {
    resolve(num + 10);
  });
}
add(5)
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
  });
