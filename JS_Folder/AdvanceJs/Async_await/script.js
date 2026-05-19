// Basic async function
async function greet() {
  return "I am Learning JavaScript At RICR Institute";
}
greet().then(console.log);

// Using await
function orderFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Food Delivered");
    }, 2000);
  });
}
async function eatFood() {
  let result = await orderFood();
  console.log(result);
}
eatFood();

//  Multiple await (Sequential Execution)
function loginAccount() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login Successful");
      resolve();
    }, 4000);
  });
}
function bookTicket() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Train ticket booked");
      resolve();
    }, 3000);
  });
}
async function trainTicketBooked() {
  await loginAccount();
  await bookTicket();
  console.log("Book Completed");
}
trainTicketBooked();

// Error Handling
function ckeckValue(value) {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      resolve("Valid");
    } else {
      reject("Invalid");
    }
  });
}
async function validate() {
  try {
    let result = await ckeckValue(5);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
validate();
