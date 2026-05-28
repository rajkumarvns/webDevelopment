let role = "Student";
let obj = {
  name: "Raj",
  age: 24,
  email: "raj@123.com",
  [role]: "Raj Kumar Gupta",
};
console.log(obj);

const user = {
  name: "Raj",
  address: {
    city: "Bhopal",
    pin: 462001,
    location: {
      lat: 66.2,
      lon: 44,
    },
  },
};
// optional chaining
// console.log(user?.address?.city);

console.log(user.address.location.lat);
let { lat, lon } = user.address.location;
console.log(lat);
console.log(lon);

for (let key in obj) {
  console.log(key, obj[key]);
}
// spread operators
let obj2 = { ...obj };
console.log(obj2);

let obj3 = Object.assign({}, obj);
console.log(obj3);

// deep clone
let user2 = JSON.parse(JSON.stringify(user));
user2.address.city = "Indore";
console.log(user);

console.log(user2);
// Practice Questions
let objNew = {
  name: "Raj",
  age: 24,
  isEnrolled: true,
};
console.log(objNew);

const objN = {
  true: "yes",
  42: "Answer",
};
console.log(objN[true]);

const user1 = {
  "first-Name": "Raj",
};
user1["first-Name"];
console.log(user1);

// let { city1 } = user;
// let { lat1 } = user.location;
// console.log(lat1);

const std = {
  "first-name": "raj kumar gupt",
};
let { "first-name": firstName } = std;
console.log(std);

const course = {
  title: "JavaScript",
  duration: "3 weeks",
};
for (let key in course) {
  console.log(key);
}

Object.entries(course).forEach((val) => {
  console.log([val[0] + " " + val[1]]);
});

const person = {};
console.log(person?.profile?.name);

const key = "role";
let objNe = {
  name: "Raj",
  [key]: "Student",
};
console.log(objNe);
