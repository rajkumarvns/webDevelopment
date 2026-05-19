// function getData(value, nextData) {
//   setTimeout(() => {
//     console.log("Getting Data", value);

//     if (nextData) {
//       nextData();
//     }
//   }, 3000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         getData(5);
//       });
//     });
//   });
// });

// Promise
function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 4) {
        reject("Query Rejected");
      } else {
        console.log("Data Sent", value);
        resolve("Query Solved");
      }
    }, 1000);
  });
}

// getData(1)
//   .then(() => getData(2))
//   .then(() => getData(3))
//   .then(() => getData(4))
//   .catch((error) => console.log(error));

// or but if we use await so complexity reduce like (n)^n to (1).
await getData(1);
await getData(2);
await getData(3);
await getData(4);
await getData(5);
