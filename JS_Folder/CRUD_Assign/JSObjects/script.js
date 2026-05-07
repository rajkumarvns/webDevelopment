// let sd = [
//     ["raj","07-08-2002",6387566379,"UP"],
//     ["raj","07-08-2002",6387566379,"UP"],
//     ["raj","07-08-2002",6387566379,"UP"],
// ];
// sd.forEach((element)=>{
//     console.log(element[2]);

// });

// JSON format data
let sd = [
  {
    name: "Rahul Sharma",
    city: "Bhopal",
    dob: "1998-05-12",
    number: "9876543210",
    profession: "Software Developer",
  },
  {
    name: "Neha Verma",
    city: "Indore",
    dob: "2000-08-22",
    number: "9123456780",
    profession: "Designer",
  },
  {
    name: "Amit Singh",
    city: "Delhi",
    dob: "1995-11-03",
    number: "9988776655",
    profession: "Teacher",
  },
];
sd.forEach((e) => {
  console.log(e["name"]);
});
console.log(sd);
// 2D way work this array
console.log(sd[1]["number"]);

// Dot notation work only in JSON sd[1].number

console.log(sd[2].number);

//

let Data = {
  name: "Amit Singh",
  city: "Delhi",
  dob: "1995-11-03",
  number: "9988776655",
  profession: "Teacher",
};
console.log(Object.keys(Data));
console.log(Object.values(Data));
console.log(Object.values(Data));

// entries
let arr = [2, 4, 6, 8, 10, 9, 21, 43, 45, 567];

arr.sort((a, b) => a - b);
console.log(arr);

// find
console.log(arr.find((val) => val > 43));
console.log(arr.findIndex((val) => val === 21));
console.log(arr.findLastIndex((val) => val === 567));

// Map function

sd.map((e) => {
  console.log(e.number);
});

// idx is fetch data and indexing both
sd.map((e, idx) => {
  console.log(idx);

  console.log(e.number);
});

//
let ar = [2, 4, 6, 8, 10, 9, 21, 43, 45, 567];
// find only first those element >20 only first greater >20 so print that

console.log(ar.find((val) => val > 20));
// filter iterate each and every element those greater than 20
console.log(ar.filter((val) => val > 20));

// slice
console.log(ar.slice(0,7));

// splite
let str = "This is Developer-Team";
// split where space is occurs
console.log(str.split(" "));
// split where hiphen(-) is present
console.log(str.split("-"));

// string 
let str = "this is a string";
console.log(str.charAt(6));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

let pi = 3.14;
console.log(pi);

console.log(typeof (pi));
let b = pi.toString();
console.log(b);

// after decimal how many digit we want
let c = 3.143454646557657;
console.log(c.toFixed(3));

let fullname = "Raj Gupta";
console.log(`My name is ${fullname}`);
